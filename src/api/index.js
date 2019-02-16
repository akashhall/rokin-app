import axios from "axios";

function getToken() {
  return sessionStorage.token;
}
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

function getAllOrg() {
  return axios.post('https://api.rockinap.com/admin/organisations',
    { "category": 'eatin out' },
    {
      headers: {
        'x-access-token': getToken(),
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

function getAllCommon(url, data) {
  const mainUrl = `https://api.rockinap.com/admin/${url}`
  return axios.post(mainUrl,
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
  return axios.post('https://api.rockinap.com/admin/add-organisation',
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
  return axios.post('https://api.rockinap.com/admin/beacons',
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
  return axios.post('https://api.rockinap.com/admin/add-beacon',
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
  return axios.post('https://api.rockinap.com/admin/products',
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
  return axios.post('https://api.rockinap.com/admin/customer-history',
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
        'x-access-token': getToken(),
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
function addProduct(data) {
  return axios.post('https://api.rockinap.com/admin/add-product',
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
  return axios.post('https://api.rockinap.com/admin/offer-history',
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
function getOffers(data) {
  return axios.post('https://api.rockinap.com/admin/offers',
    data,
    {
      headers: {
        'x-access-token': getToken(),
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
  getOfferHistory,
  addProduct,
  getOffers,
  getAllCommon
}