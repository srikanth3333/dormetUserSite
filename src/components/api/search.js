

export const search = (products,query) => {


    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');


    var config = {
        method: 'GET',
        url: `https://smyworks.com/category/search_products/?q=${query}`,
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        },
    };

    axios(config)
    .then(function (response) {
        products(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}