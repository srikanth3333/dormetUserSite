

export const allRatings = (ratings) => {

    var axios = require('axios');
    
    var config = {
      method: 'get',
      url: `https://smyworks.com/products/allRatings`,
    };
    
    axios(config)
    .then(function (response) {
        ratings(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}
