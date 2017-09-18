import LocalStorage from 'node-localstorage'

global.localStorage = new LocalStorage.LocalStorage('./test/local')
global.sessionStorage = new LocalStorage.LocalStorage('./test/session')
