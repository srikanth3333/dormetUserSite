



export const myOrders = (order) => {

    var axios = require('axios');

    let tokenUser = localStorage.getItem('user_token')
    var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/products/my_orders',
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        }
    };

    axios(config)
    .then(function (response) {
        order(response.data)
        console.log('orders')
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}