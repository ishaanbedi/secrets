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
  res.status(200).json(decrypt(params.term));
};
export default handler;
