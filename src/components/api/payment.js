



export const payment = (amount,payment_id,order_id,shop_name) => {

    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('amount', amount);
    data.append('payment_id', payment_id);
    data.append('order_id',order_id);
    data.append('shop_name',shop_name);
    var config = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/products/payment',
        headers: { 
            'Authorization': `token ${tokenUser}`,
        },
        data : data
    };

    axios(config)
    .then(function (response) {
            console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}