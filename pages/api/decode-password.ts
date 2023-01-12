import { NextApiRequest, NextApiResponse } from "next";
var handler = async (req: NextApiRequest, res: NextApiResponse) => {
  function decrypt(str) {
    let key = process.env.PASSWORD;
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += String.fromCharCode(
        str.charCodeAt(i) - key.charCodeAt(i % key.length)
      );
    }
    return result;
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
