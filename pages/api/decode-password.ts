import { NextApiRequest, NextApiResponse } from "next";
const crypto = require("crypto");

var handler = async (req: NextApiRequest, res: NextApiResponse) => {
  function decrypt_secret(ciphertext) {
    let password = process.env.PASSWORD;
    const password_hash = crypto.createHash("sha256").update(password).digest();
    const iv = Buffer.from(ciphertext.slice(0, 32), "hex");
    const cipher = crypto.createDecipheriv("aes-256-cbc", password_hash, iv);
    let secret = cipher.update(ciphertext.slice(32), "hex", "utf8");
    secret += cipher.final("utf8");
    return secret;
  }
  var params = req.query;
  var userPassword = params.userPassword;
  var serverPassword = params.serverPassword;
  if (userPassword === decrypt_secret(serverPassword)) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
};
export default handler;
