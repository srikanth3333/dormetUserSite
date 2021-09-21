

export const cartCount = (count, token) => {

    var axios = require('axios');



    var config = {
        method: 'get',
        url: 'https://smyworks.com/products/cart_count',
        headers: { 
            'Authorization': `token ${token}`, 
        },
    
    };

    axios(config)
    .then(function (response) {
        console.log('count')
        console.log(response.data);
        count(response.data.count)
    })
    .catch(function (error) {
        console.log(error);
    });

}