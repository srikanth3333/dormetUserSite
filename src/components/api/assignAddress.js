

export const assignAddress = (id) => {

    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('id', id);

    var config = {
        method: 'PUT',
        url: 'https://smyworks.com/products/billing',
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