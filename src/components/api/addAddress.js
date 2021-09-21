

export const addAddress = (fName,lName,email,address1,address2,pincode,city,state) => {

    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('first_name', fName);
    data.append('last_name', lName);
    data.append('email', email);
    data.append('address1', address1);
    data.append('address2', address2);
    data.append('pincode', pincode);
    data.append('city', city);
    data.append('state', state);

    var config = {
        method: 'POST',
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