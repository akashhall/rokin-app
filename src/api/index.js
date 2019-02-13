import axios from "axios";

function login(username, password) {
    return axios.post('https://api.rockinap.com/admin/login', {
        "email":username,
        "password":password,
        "device_id":"bsmnfsdmf"
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
          return error.response.data;
      });
}
export{
    login
}