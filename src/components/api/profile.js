
export const profile = (email,name,mobile) => {

    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://smyworks.com/products/profile',
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        }
    };

    axios(config)
    .then(function (response) {
        email(response.data.email)
        mobile(response.data.mobile_number)
        name(response.data.name)
    })
    .catch(function (error) {
        console.log(error);
    });

}