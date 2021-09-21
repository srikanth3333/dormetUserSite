



export const categoryDetail = (product,id) => {


    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');


    var config = {
        method: 'GET',
        url: `https://smyworks.com/category/categoryProducts/${id}`,
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        },
    };

    axios(config)
    .then(function (response) {
        product(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}