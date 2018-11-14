const { test } = require('tap')
const http = require('http')
const fetch = require('node-fetch')
const listen = require('test-listen-destroy')
const slowLog = require('..')

test('slowlog not called', async t => {
  const fn = (req, res, next) => {
    slowLog(30, (req, res) => {
      t.fail('slow log called')
    })(req, res)
    res.end()
  }
  const url = await listen(fn)
  const res = await fetch(url)
})

test('slowlog called', async t => {
  t.plan(1)
  const fn = (req, res, next) => {
    slowLog(80, (req, res) => {
      t.pass('slow log called')
    })(req, res)
    setTimeout(() => res.end(), 100)
  }
  const url = await listen(fn)
  const res = await fetch(url)
})

test('slowlog middleware calls next', async t => {
  slowLog(20, f => f)(null, {}, t.pass)
})
