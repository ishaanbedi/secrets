import { getXataClient } from "../../src/xata";
import { NextApiRequest, NextApiResponse } from "next";
const crypto = require("crypto");

var handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const xata = getXataClient();
  var encrypt_secret = (secret) => {
    let password = process.env.PASSWORD;
    const password_hash = crypto.createHash("sha256").update(password).digest();
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-cbc", password_hash, iv);
    let ciphertext = cipher.update(secret, "utf8", "hex");
    ciphertext += cipher.final("hex");
    return iv.toString("hex") + ciphertext;
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
      secret: encrypt_secret(secret),
      password: password,
      validity: validity,
    });
    return record;
  };
  var { passwordProtected, secret, password, validity } = req.body;
  if (!passwordProtected) {
    password = null;
  } else {
    password = encrypt_secret(password);
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
