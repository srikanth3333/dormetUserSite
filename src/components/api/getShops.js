

export const getShops = (shops) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://smyworks.com/products/listOfShops',
    
    };

    axios(config)
    .then(function (response) {
        shops(response.data.shops)
    })
    .catch(function (error) {
        console.log(error);
    });

}