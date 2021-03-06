


export const addToCart = (id,quantity,token) => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('id', id);
    data.append('quantity', quantity);

    var config = {
        method: 'post',
        url: `https://smyworks.com/products/add_to_cart`,
        headers: { 
            'Authorization': `token ${token}`, 
        },
        data: data
    };

    axios(config)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    });
}