import React from 'react';
import Slider from '../basic/Slider';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import star from "../img/star.png";

function Detail() {
    return (
        <div className="detail_page">
            <Navbar />
            <section>
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <Slider />
                            </div>
                            <div className="col-lg-6">
                                <h3 className="product-title">Kit Kat Chocolate of Pack 10</h3>
                                <div className="d-flex">
                                    <button className="btn btn-outline-success me-3">20g</button>
                                    <button className="btn btn-success me-3">50g</button>
                                    <button className="btn btn-outline-success me-3">100g</button>
                                </div>
                                <div className="d-flex mt-3 align-items-center">
                                    <img src={star} height="15" className="me-2" alt="" />58 Ratings and 12 Reviews
                                </div>
                                <p className="text-danger main-price">MRP <del>$904</del></p>
                                <p className="main-price">Best Price $640 <span className="small text-danger">20% off</span><span className="small mx-2">sold by</span><span className="text-success small-md">Shop Name Twenty One</span></p>

                                <div className="d-flex">
                                    <button className="btn btn-outline-success me-3">ADD TO CART</button>
                                    <button className="btn btn-success">BUY NOW</button>
                                </div>

                                <div className="d-flex mt-3">
                                    <button className="btn btn-secondary">ADD TO FAVOURITES</button>
                                    <button className="btn btn-secondary">SHARE THIS PRODUCT</button>
                                </div>
                                <div className="my-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut vel officia illo earum consequuntur, laudantium est fugit repellat dolorum molestias assumenda sunt, aperiam aliquid nemo dolores! Vitae, ipsa harum.</p>
                                </div>

                                <div className="my-4">
                                    <h5 className="text-dark">Product Details</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti voluptas velit pariatur, placeat exercitationem omnis non autem earum quisquam accusantium alias labore dolores aliquam consectetur provident, molestias molestiae! Qui odit veritatis ipsam soluta, rem dolor corrupti sequi corporis doloremque ratione eligendi neque tenetur doloribus reiciendis accusantium a. Consequuntur, optio!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla aliquam tenetur, facere accusantium, quia in incidunt commodi sequi molestias, suscipit eius? Distinctio officiis illo tenetur voluptatum laudantium at tempora!</p>
                                </div>
                            </div>

                        </div>

                        <h3 className="detail-head">RATINGS & REVIEWS</h3>
                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center">
                                    <img src="https://image.flaticon.com/icons/png/512/3135/3135715.png" className="me-2" height="50px" alt="" />
                                    <p className="user-name mb-0 me-2">Random User</p>
                                    <img src={star} height="20px" alt="" />
                                    <img src={star} height="20px" alt="" />
                                    <img src={star} height="20px" alt="" />
                                    <img src={star} height="20px" alt="" />
                                    <img src={star} height="20px" alt="" />
                                    <p className="mb-0 ms-2">5 Ratings</p>
                                    
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae excepturi culpa cum libero reprehenderit facilis deserunt eligendi maiores voluptates fugiat, odit animi facere, veritatis commodi non at. Rem, voluptatem.</p>

                                <div className="d-flex align-items-center">
                                    <img src="https://image.flaticon.com/icons/png/512/3135/3135715.png" className="me-2" height="50px" alt="" />
                                    <p className="user-name mb-0 me-2">Random User 2</p>
                                    <img src={star} height="20px" alt="" />
                                    <img src={star} height="20px" alt="" />
                                    <img src={star} height="20px" alt="" />
                                    <img src={star} height="20px" alt="" />
                                    <img src={star} height="20px" alt="" />
                                    <p className="mb-0 ms-2">5 Ratings</p>
                                    
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae excepturi culpa cum libero reprehenderit facilis deserunt eligendi maiores voluptates fugiat, odit animi facere, veritatis commodi non at. Rem, voluptatem.</p>
                            </div>
                            <div className="col-lg-6">
                                <span style={{fontSize: '3em'}}>4.5 Ratings</span>
                                <div className="d-flex">
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    452
                                </div>
                                <div className="d-flex">
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    12
                                </div>
                                <div className="d-flex">
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    10
                                </div>
                                <div className="d-flex">
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    12
                                </div>
                                <div className="d-flex">
                                    <img src={star} height="20px" className="me-2" alt="" />
                                    1
                                </div>

                                <div className="mt-2">
                                    <input type="text" className="form-control form-main" placeholder="Please write your review" />
                                    <button className="btn btn-success mt-3 text-right">Submit</button>
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
