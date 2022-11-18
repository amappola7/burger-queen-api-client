import axios from 'axios';

function requestHTTP(url, email, password) {
  return axios.post(url, {
    email,
    password,
  });
}

export default requestHTTP;
