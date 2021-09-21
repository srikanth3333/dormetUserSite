



export const categories = (category) => {


    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');


    var config = {
        method: 'GET',
        url: 'https://smyworks.com/category/listOfCategories',
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        },
    };

    axios(config)
    .then(function (response) {
        category(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}