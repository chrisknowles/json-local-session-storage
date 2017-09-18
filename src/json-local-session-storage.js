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
const getItem = store => key =>
  store
    ? JSON.parse(store.getItem(key)) || false
    : false

/**
 * Set a key/val pair in the store
 *
 * @param {Object} store - The storage object
 * @param {String} key   - The key value
 * @param {mixed} value  - The value to store
 */
const setItem = store => (key, value) => {
  store.setItem(key, JSON.stringify(value))
}

/**
 * Removes a key/value from the store
 *
 * @param {Object} store - The storage object
 * @param {String} key   - The key value
 */
const removeItem = store => key => {
  store.removeItem(key)
}

/**
 * Removes all key/values from the store
 *
 * @param {Object} store - The storage object
 */
const clear = store => () => {
  store.clear()
}

/**
 * Retrieves the number of keys in the store
 *
 * @param {Object} store - The storage object
 * @return {integer}     - The number of keys
 */
const length = store => () =>
  store.length

/**
 * Retrieves the name of the key at poisition i
 *
 * @param {Object} store - The storage object
 * @return {integer}     - The number of keys
 */
const key = store => i =>
  store.key(i)

/**
 * Creates the storage wrapper
 *
 * @param {String} type - The name of the storage object to use
 * @return {Object}     - The api for the storage
 */
function storage(type) {
  const store = this ? this[type] : global[type]
  return {
      getItem: getItem(store)
    , setItem: setItem(store)
    , removeItem: removeItem(store)
    , clear: clear(store)
    , length: length(store)
    , key: key(store)
  }
}

const session = storage('sessionStorage')
const local = storage('localStorage')

export {session, local}
export default {session, local}
