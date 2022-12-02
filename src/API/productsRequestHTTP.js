import axios from 'axios';

const productsListRequest = (token) => {
  return axios({
    method: 'get',
    url: 'http://localhost:8080/products',
    headers: { authorization: `Bearer ${token}` },
  });
};

export { productsListRequest };
