


export const addRatings = (id,rating,comment,token,refreshRatings,setRatings) => {
    var axios = require('axios');
    var FormData = require('form-data');
    if(rating != '' || comment != '') {
        var data = new FormData();
        data.append('rating', rating);
        data.append('comment', comment);
        data.append('id', id);
    }else {
        alert('Cannot be empty')
    }
    

    var config = {
        method: 'post',
        url: `http://127.0.0.1:8000/products/add_product_ratings/`,
        headers: { 
            'Authorization': `token ${token}`, 
        },
        data: data
    };

    axios(config)
    .then(function (response) {
        refreshRatings(setRatings,id)
    })
    .catch(function (error) {
        console.log(error);
    });
}