import React, {useEffect, useState} from 'react';
import Slider from '../basic/Slider';
import Footer from '../navigation/Footer';
import star from "../img/star.png";
import {productDetail} from '../api/productDetail';
import {addToCart} from '../api/addToCart';
import {addRatings} from '../api/addRatings';
import {productRatings} from '../api/productRatings';
import {useParams,Link,useHistory} from 'react-router-dom';
import StarRating from '../navigation/StarRating';
import ReactStars from "react-rating-stars-component";


function Detail({token}) {

    const {id} = useParams();
    let history = useHistory();

    const [product,setProduct] = useState ([])
    const [ratings,setRatings] = useState ([])
    const [comment,setComment] = useState ('')
    const [quantity,setQuantity] = useState ('50grams')
    const [userRating,setUserRating] = useState ('')

    useEffect(() => {
        productRatings(setRatings,id)
        productDetail(setProduct,id)
    }, [])

    const ratingChanged = (newRating) => {
        setUserRating(newRating)
    };


    const addFavourites = (id) => {


        let tokenUser = localStorage.getItem('user_token')
        var axios = require('axios');
        var data = new FormData();
        data.append('id', id);

        var config = {
            method: 'POST',
            url: `http://127.0.0.1:8000/products/favourites`,
            headers: { 
                'Authorization': `token ${tokenUser}`, 
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="detail_page">
            <section>
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 text-center">
                                <Slider />
                            </div>
                            <div className="col-lg-6">
                                <h3 className="product-title">{product.product_name}</h3>
                                <div className="d-flex">
                                    {["50grams","100grams","1kg"].map((button,i) => {
                                        return (
                                            <button onClick={() => setQuantity(button)} className={quantity == button ? `btn btn-success me-3` : `btn btn-outline-success me-3`}>{button}</button>
                                        )
                                    })}
                                </div>
                                <div className="d-flex mt-3 align-items-center">
                                    <img src={star} height="15" className="me-2" alt="" />{ratings.length} Ratings
                                </div>
                                <p className="text-danger main-price">MRP ${product.offer_price} <del>${product.price}</del></p>
                                <p className="main-price">Best Price ${product.offer_price} <span className="small text-danger">20% off</span><span className="small mx-2">sold by</span>
                                    <span className="text-success small-md">{ product.shop && product.shop.shop_name != undefined ? product.shop.shop_name : null}</span>
                                    
                                </p>

                                <div className="d-flex">
                                    {token ? 
                                        <>
                                            <button onClick={() => addToCart(id,quantity,token)} className="btn btn-outline-success me-3">ADD TO CART</button>
                                            <button  onClick={() => {
                                                addToCart(id,token)
                                                history.push('/cart')
                                            }} className="btn btn-success">BUY NOW</button>
                                        </>
                                    : 
                                        <>
                                            <Link to="/login" className="btn btn-outline-success me-3">ADD TO CART</Link>
                                            <Link to="/login" className="btn btn-success">BUY NOW</Link>
                                        </>
                                    }
                                    
                                    
                                </div>

                                <div className="d-flex mt-3">
                                    <button className="btn btn-secondary" onClick={() => addFavourites(product.id)}>ADD TO FAVOURITES</button>
                                    <button className="btn btn-secondary">SHARE THIS PRODUCT</button>
                                </div>

                                <div className="my-4">
                                    <h5 className="text-dark">Product Details</h5>
                                    <p>{product.products_description}</p>
                                </div>
                            </div>

                        </div>

                        <h3 className="detail-head mt-5">RATINGS & REVIEWS</h3>
                        
                        <div className="row mt-3">
                            <div className="col-lg-6">
                               {ratings.map((rating,i) => {
                                    return (
                                        <>
                                            <div className="d-flex align-items-center my-3">
                                                <p className="user-name mb-0 me-2 mb-0">{rating.user.username}</p>
                                                    <StarRating ratings={rating.ratings} />
                                                <p className="mb-0 ms-2 mb-0">{rating.ratings} Rating</p>
                                            </div>
                                            <p>{rating.comment}</p> 
                                        </>
                                    )
                                })}
                            </div>
                            <div className="col-lg-6">
                                <span style={{fontSize: '3em'}}>4.5 Ratings</span>
                                <div className="mt-2">
                                    <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={50}
                                            activeColor="#ffd700"
                                    />
                                    <textarea type="text" onChange={(e) => setComment(e.target.value)} rows="5" col="5" className="form-control form-main" placeholder="Please write your review" />
                                    {token ? <button onClick={() => {
                                        addRatings(id,userRating,comment,token,productRatings,setRatings)
                                    }} className="btn btn-success mt-3 text-right">Submit</button> : <Link to="/login" className="btn btn-success mt-3 text-right">Login First</Link>}
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <Footer />
        </div>
    )
}

export default Detail
