

export const favourites = (favourite) => {


    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');

    var config = {
        method: 'GET',
        url: `https://smyworks.com/products/favourites`,
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        },
    };

    axios(config)
    .then(function (response) {
        favourite(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

