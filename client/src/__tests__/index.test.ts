import { getUser } from '../index';
import axios from 'axios';
jest.mock('axios');

// test('server test getUser', async () => {
//   const userName = 'foo';
//   const res = await getUser('http://localhost:3000', userName);
//   expect(res.data.user).toBe(userName);
// });

test('mock test getUser', async () => {
  const userName = 'foo';
  const resData = {data: {user: userName}};
  (axios.get as any).mockResolvedValue(resData);
  const res = await getUser('http://localhost:3000', userName);
  expect(res.data.user).toBe(userName);
});

