

export const getShops = (shops) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/products/listOfShops',
    
    };

    axios(config)
    .then(function (response) {
        shops(response.data.shops)
    })
    .catch(function (error) {
        console.log(error);
    });

}