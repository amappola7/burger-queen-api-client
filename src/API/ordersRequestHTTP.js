/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const createOrderRequest = (data, token) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/orders',
    data,
    headers: { authorization: `Bearer ${token}` },
  });
};

const ordersListRequest = (token) => {
  return axios({
    method: 'get',
    url: 'http://localhost:8080/orders',
    headers: { authorization: `Bearer ${token}` },
  });
};

export { createOrderRequest, ordersListRequest };
