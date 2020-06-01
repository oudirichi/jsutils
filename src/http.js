// https://towardsdatascience.com/why-to-use-javascript-proxy-5cdc69d943e3

['get', 'put', 'post', 'delete', 'patch'].reduce((obj, method) => Object.assign({}, obj, {
  [method](url = '', body = {}, params = {}) {
    const reqParams = { url, method, headers: { 'auth-token': token } };

    if (method === 'get' || method === 'delete') {
      reqParams['params'] = params;
    } else {
      reqParams['data'] = body;
    }
    console.log(reqParams);
    //return instance.request(reqParams);
  }
}), {});


function sync({ method, url, options }) {
  return axios[method](url, options);
}


module.exports = {
  sync,
}
