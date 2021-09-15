

export const cartCount = (count, token) => {

    var axios = require('axios');


    var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/products/cart_count',
        headers: { 
            'Authorization': `token ${token}`, 
        },
    
    };

    axios(config)
    .then(function (response) {
        count(response.data.count)
    })
    .catch(function (error) {
        console.log(error);
    });

}