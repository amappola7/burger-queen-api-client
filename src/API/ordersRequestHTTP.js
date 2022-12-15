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

const modifyStatusOrderRequest = (id, data, token) => {
  return axios({
    method: 'patch',
    url: `http://localhost:8080/orders/${id}`,
    data,
    headers: { authorization: `Bearer ${token}` },
  });
};

export { createOrderRequest, ordersListRequest, modifyStatusOrderRequest };
