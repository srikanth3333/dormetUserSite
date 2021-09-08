import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import offer from "../img/exciting_offers.png";
import cancel from "../img/cancellations_landing_page.png";
import shop from "../img/shop.jpg";
import product from "../img/product.jpg";
import star from "../img/star.png";
import fav from "../img/heart.png";


function All() {
    return (
        <div className="products-main">
            <Navbar />
                <div className="products">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <button className="btn btn-success">All</button>
                                <button className="btn btn-outline-success">Services</button>
                                <button className="btn btn-outline-success">products</button>
                                <button className="btn btn-outline-success">Shops</button>
                            </div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="d-flex ">
                                 <h5 className="sec-header me-3"> SHOPS </h5>
                                 <span className="gold__text mt-1"> All Shops ></span>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
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
                                <div className="col-lg-3">
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
                                <div className="col-lg-3">
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
                                <div className="col-lg-3">
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
                                 <h5 className="sec-header me-3">PRODUCTS</h5>
                                 <span className="gold__text mt-1"> All Products ></span>
                            </div>

                            <div className="row">

                                <div className="col-lg-3">
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
                                <div className="col-lg-3">
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
                                <div className="col-lg-3">
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
                                <div className="col-lg-3">
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
                </div>
            <Footer />
        </div>
    )
}

export default All;
