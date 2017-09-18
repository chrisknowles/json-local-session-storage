# JSON Local Storage

Wrapper for local and session storage that stores values as JSON

## Usage

```
$ npm install json-local-session-storage
```

```javascript
import Storage from 'json-local-session-storage'
import {local, session} from 'json-local-session-storage'
```

```javascript
<script type='text/javascript' src='/dist/json-local-session-storage.js'></script>
<script type='text/javascript' src='/dist/json-local-session-storage.min.js'></script>
```

```javascript
import {local, session} from 'json-local-session-storage'

session.setItem('a', {a: 123})
session.setItem('b', {b: 456})

sesison.getItem('a')
// => {a: 123}

session.key(1)
// => b

session.length()
// => 2

session.removeItem('a')
session.getItem('a')
// => false

session.clear()
session.length()
// => 0
```

## License

MIT - see LICENSE.md
