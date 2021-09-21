



export const shopProducts = (shopProduct,id) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: `https://smyworks.com/products/shopProducts/${id}`,
    
    };

    axios(config)
    .then(function (response) {
        shopProduct(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}