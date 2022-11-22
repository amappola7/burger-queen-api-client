import axios from 'axios';

function requestHTTP(peticion, endpoint, propss) {
  return axios[peticion](`http://localhost:8080/${endpoint}`, propss);
}

export default requestHTTP;
