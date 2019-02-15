import axios from "axios";

const config = {
    headers: {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthcm5hbWl0MjEwNUBnbWFpbC5jb20iLCJ1dWlkIjoiNTQxMzJiZDEtZTllMS00ZmIwLTkwZDYtYjBjZWY0OWQxODNjIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE1NTAxNjI1MDMsImV4cCI6MTU1MDI3MDUwM30.EhpkiQe5Ui6H1H_SPR6dBJtjGaNathAP6yxM3POyEcs',
    }
  }
  
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
function getAllOrg() {
    return axios.post('https://api.rockinap.com/admin/organisations', {category: 'eatin out'}, { headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthcm5hbWl0MjEwNUBnbWFpbC5jb20iLCJ1dWlkIjoiNTQxMzJiZDEtZTllMS00ZmIwLTkwZDYtYjBjZWY0OWQxODNjIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE1NTAxNjI1MDMsImV4cCI6MTU1MDI3MDUwM30.EhpkiQe5Ui6H1H_SPR6dBJtjGaNathAP6yxM3POyEcs',
      }})
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
          return error;
      });
}
export{
    login,
    getAllOrg
}