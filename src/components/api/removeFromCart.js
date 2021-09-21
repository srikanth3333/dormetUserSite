




export const removeFromCart = (id,token) => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('id', id);

    var config = {
        method: 'post',
        url: `https://smyworks.com/products/remove_from_cart`,
        headers: { 
            'Authorization': `token ${token}`, 
        },
        data: data
    };

    axios(config)
    .then(function (response) {
        console.log('removed')
    })
    .catch(function (error) {
        console.log(error);
    });
}