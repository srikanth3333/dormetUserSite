




export const getAddress = (address,token) => {

    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
        method: 'get',
        url: 'https://smyworks.com/products/billing',
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        }
    };


    axios(config)
    .then(function (response) {
        address(response.data.message)
    })
    .catch(function (error) {
        console.log(error);
    });

}