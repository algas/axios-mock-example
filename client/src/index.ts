import axios from 'axios';
const httpAdapter = require('axios/lib/adapters/http');

axios.defaults.adapter = httpAdapter;

const getUser = async (host: string, userName: string) => {
  return await axios.get(`${host}/user/${userName}`);
}

const main = async () => {
  const res = await getUser('http://localhost:3000', 'foobar');
}

export { axios as axiosModule, getUser };
