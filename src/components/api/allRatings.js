

export const allRatings = (ratings) => {

    var axios = require('axios');
    
    var config = {
      method: 'get',
      url: `http://127.0.0.1:8000/products/allRatings`,
    };
    
    axios(config)
    .then(function (response) {
        ratings(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}
