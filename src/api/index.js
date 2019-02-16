import axios from "axios";

const config = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthcm5hbWl0MjEwNUBnbWFpbC5jb20iLCJ1dWlkIjoiNTQxMzJiZDEtZTllMS00ZmIwLTkwZDYtYjBjZWY0OWQxODNjIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE1NTAyMjk0MzgsImV4cCI6MTU1MDMzNzQzOH0.ZwlPVuIyfOLA0xt36BhlHHfTSKCQ8z3xFQNZlFVguEg';

function login(username, password) {
  return axios.post('https://api.rockinap.com/admin/login', {
    "email": username,
    "password": password,
    "device_id": "bsmnfsdmf"
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.response.data;
    });
}
function getAllOrg(token) {
  console.log('service', sessionStorage)
  return axios.post('https://api.rockinap.com/admin/organisations',
    { "category": 'eatin out' },
    {
      headers: {
        'x-access-token': config,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      }
    })
    .then(function (response) {
      console.log('api', response)
      return response.data;
    })
    .catch(function (error) {
      console.log('api err', error)
      return error.response.data;
    });
}
function addOrg(data) {
  console.log('service', sessionStorage)
  return axios.post('https://api.rockinap.com/admin/add-organisation',
    data,
    {
      headers: {
        'x-access-token': config,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      }
    })
    .then(function (response) {
      console.log('api', response)
      return response.data;
    })
    .catch(function (error) {
      console.log('api err', error)
      return error.response.data;
    });
}
function getBeacons(data) {
  console.log('service', sessionStorage)
  return axios.post('https://api.rockinap.com/admin/beacons',
    data,
    {
      headers: {
        'x-access-token': config,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      }
    })
    .then(function (response) {
      console.log('api', response)
      return response.data;
    })
    .catch(function (error) {
      console.log('api err', error)
      return error.response.data;
    });
}
function addBeacon(data) {
  console.log('service', sessionStorage)
  return axios.post('https://api.rockinap.com/admin/add-beacon',
    data,
    {
      headers: {
        'x-access-token': config,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      }
    })
    .then(function (response) {
      console.log('api', response)
      return response.data;
    })
    .catch(function (error) {
      console.log('api err', error)
      return error.response.data;
    });
}
function getProducts(data) {
  console.log('service', sessionStorage)
  return axios.post('https://api.rockinap.com/admin/products',
    data,
    {
      headers: {
        'x-access-token': config,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      }
    })
    .then(function (response) {
      console.log('api', response)
      return response.data;
    })
    .catch(function (error) {
      console.log('api err', error)
      return error.response.data;
    });
}
function getCustomerHistory(data) {
  console.log('service', sessionStorage)
  return axios.post('https://api.rockinap.com/admin/customer-history',
    data,
    {
      headers: {
        'x-access-token': config,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      }
    })
    .then(function (response) {
      console.log('api', response)
      return response.data;
    })
    .catch(function (error) {
      console.log('api err', error)
      return error.response.data;
    });
}
function getGameHistory(data) {
  console.log('service', sessionStorage)
  return axios.post('https://api.rockinap.com/admin/game-history',
    data,
    {
      headers: {
        'x-access-token': config,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      }
    })
    .then(function (response) {
      console.log('api', response)
      return response.data;
    })
    .catch(function (error) {
      console.log('api err', error)
      return error.response.data;
    });
}
function getOfferHistory(data) {
  console.log('service', sessionStorage)
  return axios.post('https://api.rockinap.com/admin/offer-history',
    data,
    {
      headers: {
        'x-access-token': config,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      }
    })
    .then(function (response) {
      console.log('api', response)
      return response.data;
    })
    .catch(function (error) {
      console.log('api err', error)
      return error.response.data;
    });
}
export {
  login,
  getAllOrg,
  addOrg,
  getBeacons,
  addBeacon,
  getProducts,
  getCustomerHistory,
  getGameHistory,
  getOfferHistory
}