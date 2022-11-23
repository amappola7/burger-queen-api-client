import axios from 'axios';

function authLoginRequest(email, password) {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/login',
    data: { email, password },
  });
}

function usersListRequest(token) {
  return axios({
    method: 'get',
    url: 'http://localhost:8080/users',
    headers: { authorization: `Bearer ${token}` },
  });
}

function userRequest(token, id) {
  return axios({
    method: 'get',
    url: `http://localhost:8080/users/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });
}

function createUserRequest(email, password, role, token) {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/users',
    data: { email, password, role },
    headers: { authorization: `Bearer ${token}` },
  });
}

function editUserRequest(email, password, role, token, id) {
  return axios({
    method: 'patch',
    url: `http://localhost:8080/users/${id}`,
    data: { email, password, role },
    headers: { authorization: `Bearer ${token}` },
  });
}

function deleteUserRequest(token, id) {
  return axios({
    method: 'delete',
    url: `http://localhost:8080/users/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });
}

export {
  authLoginRequest,
  usersListRequest,
  userRequest,
  createUserRequest,
  editUserRequest,
  deleteUserRequest,
};
