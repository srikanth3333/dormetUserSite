

export const trackOrder = (track,id,setTracker) => {

    let tokenUser = localStorage.getItem('user_token')
    var axios = require('axios');

    var config = {
        method: 'POST',
        url: `https://smyworks.com/products/track_order/${id}`,
        headers: { 
            'Authorization': `token ${tokenUser}`, 
        },
    };

    axios(config)
    .then(function (response) {
        track(response.data)
        if(response.data.ordered == true && response.data.retailer_assigned == false) {
                setTracker(0)
        }else if(response.data.ordered == true && response.data.retailer_assigned == true && response.data.being_delivered == false) {
                setTracker(1)
        }else if(response.data.ordered == true && response.data.retailer_assigned == true && response.data.being_delivered == true) {
                setTracker(2)
        }
    })
    .catch(function (error) {
        console.log(error);
    });


}