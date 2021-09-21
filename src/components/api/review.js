



export const review = (review) => {

    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
        method: 'get',
        url: 'https://smyworks.com/products/review',
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        }
    };


    axios(config)
    .then(function (response) {
        review(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}