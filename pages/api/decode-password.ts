import { NextApiRequest, NextApiResponse } from "next";
const crypto = require("crypto");

var handler = async (req: NextApiRequest, res: NextApiResponse) => {
  function decrypt(str) {
    let key = process.env.PASSWORD;
    const decipher = crypto.createDecipher("aes-256-cbc", key);
    let decrypted = decipher.update(str, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }
  var params = req.query;
  var userPassword = params.userPassword;
  var serverPassword = params.serverPassword;
  if (userPassword === decrypt(serverPassword)) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
};
export default handler;
