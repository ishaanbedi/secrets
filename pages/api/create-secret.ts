import { getXataClient } from "../../src/xata";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
var handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const xata = getXataClient();
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
      date_when_created: new Date(),
      protected: passwordProtected,
      visits: 0,
      secret: secret,
      password: password,
      validity: validity,
    });
    return record;
  };
  var { passwordProtected, secret, password, validity } = req.body;
  if (!passwordProtected) password = null;
  var salt = await bcrypt.genSalt(10);
  if (password) {
    password = await bcrypt.hash(password, salt);
  }
  secret = await bcrypt.hash(secret, salt);
  var { id } = await pushToDb({
    passwordProtected,
    secret,
    password,
    validity,
  });
  res.status(200).json(id.slice(4));
  // res.status(200).json({ id: "test" });
};

export default handler;
