import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function Checkout() {
    return (
        <div className="main-checkout">
            <Navbar />
            <section className="checkout">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center step-box">
                        <div className="box-holder">
                            <div className="box1 box box-green box-done text-center">
                                <DoneOutlineIcon style={{color: '#fff'}} />
                            </div>
                            <p className="step-text text-success">Pickup / Shipping</p>
                        </div>
                        <div className="line line-done"></div>
                        <div className="box-holder">
                            <div className="box2 box box-green">
                                2
                            </div>
                            <p className="step-text text-success">Order Review</p>
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
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                        <div className="main-border">
                        <div className="d-flex">
                        <div className="d-flex mr-5">
                            <h6 className="me-3">Delivery Address</h6>
                            <p>Tracy, G <br /> 14-2, <br /> Smondo Apartments <br />Bengalore <br />523813 <br /> <br /> test@gmail.com <br />+91 8988736456</p>
                        </div>
                        <div className="d-flex">
                            <h6 className="me-3">Billing Address</h6>
                            <p>Tracy, G <br /> 14-2, <br /> Smondo Apartments <br />Bengalore <br />523813 <br /> <br /> test@gmail.com <br />+91 8988736456</p>
                        </div>
                        </div>

                            
                            </div>
                        </div>

                        <div className="col-lg-5 mt-4">
                        <div className="text-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="me-3">
                                        <p>Total items</p>
                                        <p>MRP</p>
                                        <p>Promo Code</p>
                                        <p>Discount</p>
                                        <p>Delivery Charge</p>
                                    </div>
                                    <div>
                                        <p className="light">6 Items</p>
                                        <p className="light">430 Rs</p>
                                        <input type="text" style={{border: '0px',borderBottom: '2px solid #CECECE4D',boxShadow: 'none' }} className="form-control" placeholder="promo Code" />
                                        <p className="light"><span className="text-danger">10%</span></p>
                                        <p className="light">50 Rs</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="price m-0 me-3"><b>Total</b></p>
                                    <p className="price m-0"><b>3850.0</b></p>
                                </div>
                                <hr />
                            </div>
                        </div>
                        
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                        <button className="btn btn-outline-success me-4">Go Back</button>
                        <button className="btn btn-success">Pay Amount</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Checkout;
