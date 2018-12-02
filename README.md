# slowlog http -handler

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![build status](https://api.travis-ci.org/JamesKyburz/slowlog.svg)](https://travis-ci.org/JamesKyburz/slowlog)
[![downloads](https://img.shields.io/npm/dm/slowlog.svg)](https://npmjs.org/package/slowlog)
[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/slowlog.svg)](https://greenkeeper.io/)

An http handler to allow logging of slow requests

## Usage

```javascript
// index.js
const slowlog = require('slowlog')
insertframeworkhere.use(slowlog(1000, (req, res) => {
  console.log('slow request', req.url, res._headers)
}))
```

# license

[Apache License, Version 2.0](LICENSE)
