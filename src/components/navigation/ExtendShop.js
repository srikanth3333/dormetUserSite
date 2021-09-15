import React from 'react';
import {Link} from 'react-router-dom';
import StarRating from './StarRating';

function ExtendShop({extShops}) {
    return (
        <>
            {extShops.map((shop) => {
                return (
                    <div className="col-lg-3">
                        <Link to={`/products/shops/${shop.id}`}>
                            <img src={`http://127.0.0.1:8000${shop.image}`} className="content-img img-fluid" alt="" />
                            <div className="content-text text-center">
                                <p>{shop.shop_name}</p>
                                <div className="d-flex justify-content-center">
                                    <StarRating ratings={shop.ratings} />
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default ExtendShop;
