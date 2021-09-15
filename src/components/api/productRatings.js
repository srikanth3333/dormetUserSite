
export const productRatings = (setRatings,id) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: `http://127.0.0.1:8000/products/productRatings/${id}`,
    
    };

    axios(config)
    .then(function (response) {
        console.log(response)
        setRatings(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

}