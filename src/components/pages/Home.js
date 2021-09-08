import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import delivery from "../img/fastest_delivery_landing_page.png";
import offer from "../img/exciting_offers.png";
import cancel from "../img/cancellations_landing_page.png";
import shop from "../img/shop.jpg";
import product from "../img/product.jpg";
import star from "../img/star.png";
import fav from "../img/heart.png";

function Home() {
    return (
        <div>
            <Navbar />
                <div className="home"> 
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="heading">Shop Online From</h2>
                                <h1>Stores Nearby</h1>
                                <p className="home_text">Get your Delivery less than 20 minutes*</p>

                                <div className="btn__box d-flex">
                                    <button className="btn btn-success me-4">Browse Shops</button>
                                    <button className="btn btn-outline-success">Browse products</button>
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
                                 <span className="gold__text mt-1"> All Shops ></span>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <img src={shop} className="content-img" alt="" />
                                    <div className="content-text text-center">
                                        <p>Shop Name Twenty </p>
                                        <div className="d-flex justify-content-center">
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={shop} className="content-img" alt="" />
                                    <div className="content-text text-center">
                                        <p>Shop Name Twenty </p>
                                        <div className="d-flex justify-content-center">
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={shop} className="content-img" alt="" />
                                    <div className="content-text text-center">
                                        <p>Shop Name Twenty </p>
                                        <div className="d-flex justify-content-center">
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={shop} className="content-img" alt="" />
                                    <div className="content-text text-center">
                                        <p>Shop Name Twenty </p>
                                        <div className="d-flex justify-content-center">
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={shop} className="content-img" alt="" />
                                    <div className="content-text text-center">
                                        <p>Shop Name Twenty </p>
                                        <div className="d-flex justify-content-center">
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={shop} className="content-img" alt="" />
                                    <div className="content-text text-center">
                                        <p>Shop Name Twenty </p>
                                        <div className="d-flex justify-content-center">
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                            <img src={star} alt="" className="star-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="d-flex mt-5">
                                 <h5 className="sec-header me-3">FEATURED PRODUCTS</h5>
                                 <span className="gold__text mt-1"> All Products ></span>
                            </div>

                            <div className="row">
                                <div className="col-lg-2">
                                    <img src={product} className="content-img" alt="" />
                                    <div className="d-flex justify-content-end">
                                        <img src={fav} className="fav" alt="" />
                                    </div>
                                    <div className="content-text ">
                                        <p>Kit Kat Chocolate </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="">
                                                <p className="gm mb-0">500g</p>
                                                
                                            </div>
                                            <div>
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                            </div>
                                        </div>
                                        <p className="price ms-2">$230 <del>$280</del></p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={product} className="content-img" alt="" />
                                    <div className="d-flex justify-content-end">
                                        <img src={fav} className="fav" alt="" />
                                    </div>
                                    <div className="content-text ">
                                        <p>Kit Kat Chocolate </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="">
                                                <p className="gm mb-0">500g</p>
                                                
                                            </div>
                                            <div>
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                            </div>
                                        </div>
                                        <p className="price ms-2">$230 <del>$280</del></p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={product} className="content-img" alt="" />
                                    <div className="d-flex justify-content-end">
                                        <img src={fav} className="fav" alt="" />
                                    </div>
                                    <div className="content-text ">
                                        <p>Kit Kat Chocolate </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="">
                                                <p className="gm mb-0">500g</p>
                                                
                                            </div>
                                            <div>
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                            </div>
                                        </div>
                                        <p className="price ms-2">$230 <del>$280</del></p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={product} className="content-img" alt="" />
                                    <div className="d-flex justify-content-end">
                                        <img src={fav} className="fav" alt="" />
                                    </div>
                                    <div className="content-text ">
                                        <p>Kit Kat Chocolate </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="">
                                                <p className="gm mb-0">500g</p>
                                                
                                            </div>
                                            <div>
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                            </div>
                                        </div>
                                        <p className="price ms-2">$230 <del>$280</del></p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={product} className="content-img" alt="" />
                                    <div className="d-flex justify-content-end">
                                        <img src={fav} className="fav" alt="" />
                                    </div>
                                    <div className="content-text ">
                                        <p>Kit Kat Chocolate </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="">
                                                <p className="gm mb-0">500g</p>
                                                
                                            </div>
                                            <div>
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                            </div>
                                        </div>
                                        <p className="price ms-2">$230 <del>$280</del></p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <img src={product} className="content-img" alt="" />
                                    <div className="d-flex justify-content-end">
                                        <img src={fav} className="fav" alt="" />
                                    </div>
                                    <div className="content-text ">
                                        <p>Kit Kat Chocolate </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="">
                                                <p className="gm mb-0">500g</p>
                                                
                                            </div>
                                            <div>
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                                <img src={star} alt="" className="star-img-small" />
                                            </div>
                                        </div>
                                        <p className="price ms-2">$230 <del>$280</del></p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </section>
            <Footer />
        </div>
    )
}

export default Home
