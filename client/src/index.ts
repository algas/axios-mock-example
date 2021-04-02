import axios from 'axios';
const httpAdapter = require('axios/lib/adapters/http');

const getUser = async (host: string, userName: string) => {
  axios.defaults.adapter = httpAdapter;
  return await axios.get(`${host}/user/${userName}`);
}

const main = async () => {
  const res = await getUser('http://localhost:3000', 'foobar');
}

export { axios as axiosModule, getUser };
