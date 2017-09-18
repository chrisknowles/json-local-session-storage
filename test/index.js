import test from 'tape'
import './global.js'
import {local} from '../src/json-local-session-storage.js'

function reset() {
  global.localStorage.clear()
}

test('getItem / setItem', t => {
  reset()
  t.equal(local.getItem('a'), false)
  local.setItem('a', {a: 123})
  t.equal(local.getItem('a').a, 123)
  local.setItem('a', {a: 456})
  t.equal(local.getItem('a').a, 456)
  t.end()
});

test('removeItem', t => {
  reset()
  local.setItem('a', {a: 123})
  local.setItem('b', {a: 456})
  local.removeItem('a')
  t.equal(local.getItem('a'), false)
  t.equal(local.getItem('b').a, 456)
  t.end()
});

test('clear', t => {
  reset()
  local.setItem('a', {a: 123})
  local.setItem('b', {a: 456})
  local.clear()
  t.equal(local.getItem('a'), false)
  t.equal(local.getItem('b'), false)
  t.end()
});

test('length', t => {
  reset()
  local.setItem('a', {a: 123})
  local.setItem('b', {a: 456})
  t.equal(local.length(), 2)
  local.removeItem('a')
  t.equal(local.length(), 1)
  local.clear()
  t.equal(local.length(), 0)
  t.end()
});

test('key', t => {
  reset()
  local.setItem('a', {a: 123})
  local.setItem('b', {a: 456})
  t.equal(local.key(0), 'a')
  t.equal(local.key(1), 'b')
  t.end()
});
