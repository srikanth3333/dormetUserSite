

export const getProducts = (products) => {

    var axios = require('axios');
    
    var config = {
      method: 'get',
      url: `http://127.0.0.1:8000/products/listOfProducts`,
    };
    
    axios(config)
    .then(function (response) {
      products(response.data.products);
    })
    .catch(function (error) {
      console.log(error);
    });

}
