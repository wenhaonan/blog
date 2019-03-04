//原生加密模块儿
const crypto = require('crypto');

//加密对象，返回加密成功的数据
module.exports = function (password, key = "haonan da shui bi") {
  const hmac = crypto.createHmac("sha256", key)
  hmac.update(password)
  const passwordHmac = hmac.digest("hex")
  return passwordHmac
}