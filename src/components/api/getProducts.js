

export const getProducts = (products) => {

    var axios = require('axios');
    
    var config = {
      method: 'get',
      url: `https://smyworks.com/products/listOfProducts`,
    };
    
    axios(config)
    .then(function (response) {
      products(response.data.products);
    })
    .catch(function (error) {
      console.log(error);
    });

}
