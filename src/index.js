const onHeaders = require('on-headers')

module.exports = (threshold, cb) => (req, res, next) => {
  const timer = setTimeout(() => cb(req, res), threshold)
  onHeaders(res, () => clearTimeout(timer))
  next && next()
}
