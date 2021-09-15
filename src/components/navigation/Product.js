import React, {useState, useEffect} from 'react';
import fav from "../img/heart.png";
import fullfav from "../img/fullheart.png";
import {Link} from 'react-router-dom';
import StarRating from './StarRating';
import {favourites} from '../api/favourites'

function Product({product,mainRatings}) {


    const [itemFavourites, setItemFavourites] = useState ([])

    useEffect(() => {
        favourites(setItemFavourites)
    }, [])

    return (
        <>
            {product.map((item,i) => {
                        return (
                            <>
                                    <div className="col-lg-3">
                                        <Link to={`/detail/${item.id}`}>
                                        <img src={`http://127.0.0.1:8000${item.image}`} className="content-img" alt="" />
                                        <div className="d-flex justify-content-end">
                                            {itemFavourites.map((favourite) => {
                                                if(favourite.id == item.id) {
                                                    return <img src={fullfav} className="fav" alt="" />
                                                }else {
                                                   return  null
                                                }
                                            })}
                                        </div>
                                        <div className="content-text ">
                                            <p>{item.product_name}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="">
                                                    <p className="gm mb-0">500g</p>
                                                </div>
                                                {mainRatings.map(rating =>   item.id == rating.product.id ? <StarRating ratings={rating.ratings} /> : null )}
                                            </div>
                                            <p className="price ms-2">₹{item.offer_price} <del>${item.price}</del></p>
                                        </div>
                                        </Link>
                                    </div>
                            </>
                        )
                    })}
        </>
    )
}

export default Product
