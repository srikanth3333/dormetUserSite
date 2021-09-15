import React from 'react';
import star from "../img/star.png";
import starPale from "../img/starPale.png";

function StarRating({ratings}) {

    return (
        <div>
            {[1,2,3,4,5].map((rating) => {
                return (
                    <>
                        {rating <= ratings ?
                            <img src={star} alt="" className="star-img-small" />
                        : 
                            <img src={starPale} alt="" className="star-img-small" />
                        }
                        
                    </>
                )
            })}
        </div>
    )
}

export default StarRating
