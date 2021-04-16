# axios mock example

Mock testing example of a HTTP client depends on axios in TypeScript

## What's this?

It is not easy to set up correctly axios mock testing in TypeScript.

## Points

Three points for the correct setting.

1. Set axios adapter to HTTP in the client code  
```ts
const httpAdapter = require('axios/lib/adapters/http');
axios.defaults.adapter = httpAdapter;
```
2. Export axios module from the client  
```ts
import axios from 'axios';
export { axios as axiosModule };
```
3. Use `axios-mock-adapter` with an imported axios module in test
```ts
import { getUser, axiosModule } from 'axios-client-example';
import MockAdapter from 'axios-mock-adapter';

test('mock test getUser', async () => {
  const mock = new MockAdapter(axiosModule);
  const resData = { /* foo: bar */ }; // mock response data
  mock.onGet('/path/to/client').reply(200, resData);
  // write code to test your client
  mock.reset();
});
```

## Structure

- client: HTTP client
- client-test: Mock test of client
- server: Web server
