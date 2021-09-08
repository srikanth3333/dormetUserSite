import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import card from "../img/card.jpg";


function Confirmation() {
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
                            <div className="box2 box box-green box-done">
                            <DoneOutlineIcon style={{color: '#fff'}} />
                            </div>
                            <p className="step-text text-success">Order Review</p>
                        </div>
                        <div className="line line-done"></div>
                        <div className="box-holder">
                            <div className="box2 box box-green box-done">
                            <DoneOutlineIcon style={{color: '#fff'}} />
                            </div>
                            <p className="step-text text-success">Payment</p>
                        </div>
                        <div className="line line-done"></div>
                        <div className="box-holder">
                            <div className="box2 box box-green">
                                4
                            </div>
                            <p className="step-text text-green">Confirmation</p>
                        </div>
                    </div>
                    <div className="confirm-row row text-center">
                        <div className="col-lg-12">
                        <DoneOutlineIcon style={{color: '#fff',fontSize: '50px', backgroundColor: '#2AA786',borderRadius: '50%',padding: '4px',marginBottom: '0.6em'}} />
                        <h6 className="confirm-text">
                            
                            Well Done ! order #345resedft has been successfully placed

                        </h6>
                        <p className="light">Your can track your order status via <span className="text-success">My Orders</span></p>
                        <button className="btn btn-success">Continue Shopping</button>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Confirmation;
