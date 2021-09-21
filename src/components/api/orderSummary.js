
export const orderSummary = (summary,id) => {


    var axios = require('axios');

    let tokenUser = localStorage.getItem('user_token')
    var config = {
        method: 'POST',
        url: `https://smyworks.com/products/order_summary/${id}`,
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        }
    };

    axios(config)
    .then(function (response) {
        summary(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}