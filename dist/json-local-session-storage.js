(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.JSONStorage = {})));
}(this, (function (exports) { 'use strict';

/**
* Wrapper for local and session storage that stores values as JSON
*/

/**
 * Get a key/val pair from the store
 *
 * @param {Object} store - The storage object
 * @param {String} key   - The key value
 * @return {mixed}       - The JSON decoded value or boolean 
 *                         false if key not exists
 */
var getItem = function getItem(store) {
  return function (key) {
    return store ? JSON.parse(store.getItem(key)) || false : false;
  };
};

/**
 * Set a key/val pair in the store
 *
 * @param {Object} store - The storage object
 * @param {String} key   - The key value
 * @param {mixed} value  - The value to store
 */
var setItem = function setItem(store) {
  return function (key, value) {
    store.setItem(key, JSON.stringify(value));
  };
};

/**
 * Removes a key/value from the store
 *
 * @param {Object} store - The storage object
 * @param {String} key   - The key value
 */
var removeItem = function removeItem(store) {
  return function (key) {
    store.removeItem(key);
  };
};

/**
 * Removes all key/values from the store
 *
 * @param {Object} store - The storage object
 */
var clear = function clear(store) {
  return function () {
    store.clear();
  };
};

/**
 * Retrieves the number of keys in the store
 *
 * @param {Object} store - The storage object
 * @return {integer}     - The number of keys
 */
var length = function length(store) {
  return function () {
    return store.length;
  };
};

/**
 * Retrieves the name of the key at poisition i
 *
 * @param {Object} store - The storage object
 * @return {integer}     - The number of keys
 */
var key = function key(store) {
  return function (i) {
    return store.key(i);
  };
};

/**
 * Creates the storage wrapper
 *
 * @param {String} type - The name of the storage object to use
 * @return {Object}     - The api for the storage
 */
function storage(type) {
  var store = this ? this[type] : global[type];
  return {
    getItem: getItem(store),
    setItem: setItem(store),
    removeItem: removeItem(store),
    clear: clear(store),
    length: length(store),
    key: key(store)
  };
}

var session = storage('sessionStorage');
var local = storage('localStorage');

var jsonLocalSessionStorage = { session: session, local: local };

exports.Storage = jsonLocalSessionStorage;

Object.defineProperty(exports, '__esModule', { value: true });

})));
