import { getXataClient } from "../../src/xata";
import { NextApiRequest, NextApiResponse } from "next";
var handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const xata = getXataClient();
  var encryptPassed = (str: string) => {
    let result = "";
    let key = process.env.PASSWORD;
    for (let i = 0; i < str.length; i++) {
      result += String.fromCharCode(
        str.charCodeAt(i) + key.charCodeAt(i % key.length)
      );
    }
    return result;
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
