import { getUser, axiosModule } from 'axios-client-example';
import MockAdapter from 'axios-mock-adapter';

test('mock test getUser', async () => {
  const mock = new MockAdapter(axiosModule);
  const userName = 'foo';
  const resData = {user: userName};
  mock.onGet(`http://localhost:3000/user/${userName}`).reply(200, resData);
  const res = await getUser('http://localhost:3000', userName);
  expect(res.data.user).toBe(userName);
  mock.reset();
});

