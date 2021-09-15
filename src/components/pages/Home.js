import React, {useEffect, useState} from 'react';
import Footer from '../navigation/Footer';
import delivery from "../img/fastest_delivery_landing_page.png";
import offer from "../img/exciting_offers.png";
import cancel from "../img/cancellations_landing_page.png";
import {Link} from 'react-router-dom';
import {getProducts} from '../api/getProducts';
import {getShops} from '../api/getShops';
import {allRatings} from '../api/allRatings';
import Product from '../navigation/Product';
import ExtendShop from '../navigation/ExtendShop';
 

function Home() {

    const [products,setProducts] = useState ([])
    const [shops,setShops] = useState ([])
    const [ratings,setRatings] = useState ([])

    useEffect(() => {
        getProducts(setProducts)
        getShops(setShops)
        allRatings(setRatings)
    }, [])

    return (
        <div>
                <div className="home"> 
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="heading">Shop Online From</h2>
                                <h1>Stores Nearby</h1>
         
                                <p className="home_text">Get your Delivery less than 20 minutes*</p>

                                <div className="btn__box d-flex">
                                    <Link to="/shops" className="btn btn-success me-4">Browse Shops</Link>
                                    <Link to="/products" className="btn btn-outline-success">Browse products</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="features">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={delivery} className="img-main" alt="" />
                                </div>
                                <div className="col-lg-4">
                                    <img src={offer} className="img-main" alt="" />
                                </div>
                                <div className="col-lg-4">
                                    <img src={cancel} className="img-main" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="content">
                        <div className="container-fluid">
                            <div className="d-flex ">
                                 <h5 className="sec-header me-3"> SHOPS NEARBY</h5>
                                 <Link to="/shops" className="gold__text mt-1"> All Shops ></Link>
                            </div>
                            <div className="row">
                                <ExtendShop extShops={shops} />
                            </div>


                            <div className="d-flex mt-5">
                                 <h5 className="sec-header me-3">FEATURED PRODUCTS</h5>
                                 <Link to="/products" className="gold__text mt-1"> All Products ></Link>
                            </div>
                            <div className="row">
                                <Product product={products} mainRatings={ratings} />
                            </div>
                            
                        </div>
                    </section>
            <Footer />
        </div>
    )
}

export default Home
