import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';

function Checkout() {
    return (
        <div className="main-checkout">
            <Navbar />
            <section className="checkout">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center step-box">
                        <div className="box-holder">
                            <div className="box1 box box-green text-center">
                                1
                            </div>
                            <p className="step-text text-success">Pickup / Shipping</p>
                        </div>
                        <div className="line"></div>
                        <div className="box-holder">
                            <div className="box2 box">
                                2
                            </div>
                            <p className="step-text">Order Review</p>
                        </div>
                        <div className="line"></div>
                        <div className="box-holder">
                            <div className="box2 box">
                                3
                            </div>
                            <p className="step-text">Payment</p>
                        </div>
                        <div className="line"></div>
                        <div className="box-holder">
                            <div className="box2 box">
                                4
                            </div>
                            <p className="step-text">Confirmation</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <p>Delivery Address</p>
                            <div className="d-flex">
                            <input type="radio" className="me-2 mt-1" checked />
                            <p>Tracy, G <br /> 14-2, <br /> Smondo Apartments <br />Bengalore <br />523813 <br /> <br /> test@gmail.com <br />+91 8988736456</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="d-flex">
                            <input type="radio" className="me-2 mt-1"  />
                            <p>Add New Delivery Address</p>
                            </div>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="">Name</label>
                                            <input type="text" className="form-control" placeholder="Enter name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" className="form-control" placeholder="name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="">Email Address</label>
                                            <input type="text" className="form-control" placeholder="email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <label htmlFor="">Address Line 1</label>
                                            <input type="text" className="form-control" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" className="form-control" placeholder="Mobile" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Address Line 2 / landmark</label>
                                            <input type="text" className="form-control" placeholder="Address 2" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="">Pincode</label>
                                            <input type="text" className="form-control" placeholder="pincode" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="">City</label>
                                            <input type="text" className="form-control" placeholder="city" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">State</label>
                                            <input type="text" className="form-control" placeholder="state" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" checked type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Billing Address Same as Delivery Address
                                </label>
                                </div>

                                <div className="d-flex justify-content-end mt-4">
                                    <button className="btn btn-outline-success me-4">Go Back</button>
                                    <button className="btn btn-success">Save and Review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Checkout;
