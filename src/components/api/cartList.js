



export const cartList = (setCartItem,token,discount,count,price) => {


    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');
    var data = new FormData();
    data.append('discount', discount);


    var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/products/cart_list',
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        },
        data: data
    };

    axios(config)
    .then(function (response) {
        count(response.data.cart_Count)
        price(response.data.total)
        setCartItem(response.data.cart)
    })
    .catch(function (error) {
        console.log(error);
    });

}