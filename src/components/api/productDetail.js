

export const productDetail = (product,id) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: `https://smyworks.com/products/listOfProducts/${id}`,
    
    };

    axios(config)
    .then(function (response) {
        product(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}