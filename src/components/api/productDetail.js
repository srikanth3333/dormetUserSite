

export const productDetail = (product,id) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: `http://127.0.0.1:8000/products/listOfProducts/${id}`,
    
    };

    axios(config)
    .then(function (response) {
        product(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}