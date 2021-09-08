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
                                <button className="btn btn-success">products</button>
                                <button className="btn btn-outline-success">Shops</button>
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
                                                <div className="card-box">
                                                <img src={product} className="content-img" alt="" />
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

                                                    
                                                    
                                                    <div className="cart-box d-flex justify-content-between align-items-center">
                                                        <button className="btn btn-outline-success me-1">Add to Cart</button>
                                                        <img src={fav} className="fav" alt="" />
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box">
                                                <img src={product} className="content-img" alt="" />
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

                                                    
                                                    
                                                    <div className="cart-box d-flex justify-content-between align-items-center">
                                                        <button className="btn btn-outline-success me-1">Add to Cart</button>
                                                        <img src={fav} className="fav" alt="" />
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box">
                                                <img src={product} className="content-img" alt="" />
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

                                                    
                                                    
                                                    <div className="cart-box d-flex justify-content-between align-items-center">
                                                        <button className="btn btn-outline-success me-1">Add to Cart</button>
                                                        <img src={fav} className="fav" alt="" />
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box">
                                                <img src={product} className="content-img" alt="" />
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

                                                    
                                                    
                                                    <div className="cart-box d-flex justify-content-between align-items-center">
                                                        <button className="btn btn-outline-success me-1">Add to Cart</button>
                                                        <img src={fav} className="fav" alt="" />
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box">
                                                <img src={product} className="content-img" alt="" />
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

                                                    
                                                    
                                                    <div className="cart-box d-flex justify-content-between align-items-center">
                                                        <button className="btn btn-outline-success me-1">Add to Cart</button>
                                                        <img src={fav} className="fav" alt="" />
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <div className="card-box">
                                                <img src={product} className="content-img" alt="" />
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

                                                    
                                                    
                                                    <div className="cart-box d-flex justify-content-between align-items-center">
                                                        <button className="btn btn-outline-success me-1">Add to Cart</button>
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
