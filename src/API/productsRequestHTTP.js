import axios from 'axios';

const productsListRequest = (token) => {
  return axios({
    method: 'get',
    url: 'http://localhost:8080/products',
    headers: { authorization: `Bearer ${token}` },
  });
};

const createProductsRequest = (name, price, image, type, token) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/products',
    data: { name, price, image, type },
    headers: { authorization: `Bearer ${token}` },
  });
};

const editProductsRequest = (name, price, image, type, token, id) => {
  return axios({
    method: 'patch',
    url: `http://localhost:8080/users/${id}`,
    data: { name, price, image, type },
    headers: { authorization: `Bearer ${token}` },
  });
};

export { productsListRequest, createProductsRequest, editProductsRequest };
