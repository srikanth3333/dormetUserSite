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
                                <button className="btn btn-outline-success">All</button>
                                <button className="btn btn-outline-success">Services</button>
                                <button className="btn btn-outline-success">products</button>
                                <button className="btn btn-success">Shops</button>
                            </div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="container-fluid">
                        
                            <div className="row">

                                <div className="col-lg-3">
                                    <h4>Filters</h4>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row">
                                        <div className="col-lg-4">
                                                <div className="card-box text-center">
                                                    <img src={shop} className="content-img" alt="" />
                                                        <div className="content-text ">
                                                        <p>Shop Name Twenty </p>
                                                        <div className="d-flex justify-content-center">
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                        </div>
                                                        
                                                        
                                                        <div className="cart-box d-flex justify-content-between mt-4 align-items-center">
                                                            <button className="btn btn-outline-success me-1">Explore</button>
                                                            <img src={fav} className="fav" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box text-center">
                                                    <img src={shop} className="content-img" alt="" />
                                                        <div className="content-text ">
                                                        <p>Shop Name Twenty </p>
                                                        <div className="d-flex justify-content-center">
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                        </div>
                                                        
                                                        
                                                        <div className="cart-box d-flex justify-content-between mt-4 align-items-center">
                                                            <button className="btn btn-outline-success me-1">Explore</button>
                                                            <img src={fav} className="fav" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box text-center">
                                                    <img src={shop} className="content-img" alt="" />
                                                        <div className="content-text ">
                                                        <p>Shop Name Twenty </p>
                                                        <div className="d-flex justify-content-center">
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                        </div>
                                                        
                                                        
                                                        <div className="cart-box d-flex justify-content-between mt-4 align-items-center">
                                                            <button className="btn btn-outline-success me-1">Explore</button>
                                                            <img src={fav} className="fav" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box text-center">
                                                    <img src={shop} className="content-img" alt="" />
                                                        <div className="content-text ">
                                                        <p>Shop Name Twenty </p>
                                                        <div className="d-flex justify-content-center">
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                        </div>
                                                        
                                                        
                                                        <div className="cart-box d-flex justify-content-between mt-4 align-items-center">
                                                            <button className="btn btn-outline-success me-1">Explore</button>
                                                            <img src={fav} className="fav" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box text-center">
                                                    <img src={shop} className="content-img" alt="" />
                                                        <div className="content-text ">
                                                        <p>Shop Name Twenty </p>
                                                        <div className="d-flex justify-content-center">
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                        </div>
                                                        
                                                        
                                                        <div className="cart-box d-flex justify-content-between mt-4 align-items-center">
                                                            <button className="btn btn-outline-success me-1">Explore</button>
                                                            <img src={fav} className="fav" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box text-center">
                                                    <img src={shop} className="content-img" alt="" />
                                                        <div className="content-text ">
                                                        <p>Shop Name Twenty </p>
                                                        <div className="d-flex justify-content-center">
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                        </div>
                                                        
                                                        
                                                        <div className="cart-box d-flex justify-content-between mt-4 align-items-center">
                                                            <button className="btn btn-outline-success me-1">Explore</button>
                                                            <img src={fav} className="fav" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box text-center">
                                                    <img src={shop} className="content-img" alt="" />
                                                        <div className="content-text ">
                                                        <p>Shop Name Twenty </p>
                                                        <div className="d-flex justify-content-center">
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                            <img src={star} alt="" className="star-img" />
                                                        </div>
                                                        
                                                        
                                                        <div className="cart-box d-flex justify-content-between mt-4 align-items-center">
                                                            <button className="btn btn-outline-success me-1">Explore</button>
                                                            <img src={fav} className="fav" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>

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
