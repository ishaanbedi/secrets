import { getXataClient } from "../../src/xata";
import { NextApiRequest, NextApiResponse } from "next";
const crypto = require("crypto");

var handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const xata = getXataClient();
  var encryptPassed = (str: string) => {
    let key = process.env.PASSWORD;
    const cipher = crypto.createCipher("aes-256-cbc", key);
    let encrypted = cipher.update(str, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  };
  const pushToDb = async ({
    passwordProtected,
    secret,
    password,
    validity,
  }: {
    passwordProtected: boolean;
    secret: string;
    password: string | null;
    validity: number;
  }) => {
    const record = await xata.db.secrets_database.create({
      protected: passwordProtected,
      visits: 0,
      secret: encryptPassed(secret),
      password: password,
      validity: validity,
    });
    return record;
  };
  var { passwordProtected, secret, password, validity } = req.body;
  if (!passwordProtected) {
    password = null;
  } else {
    password = encryptPassed(password);
  }
  var { id } = await pushToDb({
    passwordProtected,
    secret,
    password,
    validity,
  });
  res.status(200).json(id.slice(4));
};

export default handler;
