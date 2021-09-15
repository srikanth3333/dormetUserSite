



export const shopProducts = (shopProduct,id) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: `http://127.0.0.1:8000/products/shopProducts/${id}`,
    
    };

    axios(config)
    .then(function (response) {
        shopProduct(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}