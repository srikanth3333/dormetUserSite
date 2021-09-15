import React, {useState, useEffect} from 'react';
import Footer from '../navigation/Footer';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import {review} from '../api/review';
import {cartList} from '../api/cartList';
import {Link} from 'react-router-dom'

function Checkout({token}) {

    const [orderReview,setOrderReview] = useState([])
    const [count, setCount] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        review(setOrderReview)
        cartList('',token,'',setCount,setPrice)
    },[])

    return (
        <div className="main-checkout">
            {orderReview != 0 ?
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
                        <div className="main-border p-3">
                        
                        <div className="row">
                            {orderReview ?
                                orderReview.map((data,i) => {
                                    return (
                                        <>

                                            <div className="col-lg-6">
                                                <div className="card my-3">
                                                    <div className="card-header">
                                                        <h6>Delivery Address</h6>        
                                                    </div>
                                                    <div className="card-body">
                                                        <p>{data.billing_address.first_name}</p>
                                                        <p>{data.billing_address.last_name}</p>
                                                        <p>{data.billing_address.email}</p>
                                                        <p>{data.billing_address.address1}</p>
                                                        <p>{data.billing_address.address2}</p>
                                                        <p>{data.billing_address.pincode}</p>
                                                        <p>{data.billing_address.city}</p>
                                                        <p>{data.billing_address.state}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="card my-3">
                                                    <div className="card-header">
                                                        <h6>Billing Address</h6>        
                                                    </div>
                                                    <div className="card-body">
                                                        <p>{data.billing_address.first_name}</p>
                                                        <p>{data.billing_address.last_name}</p>
                                                        <p>{data.billing_address.email}</p>
                                                        <p>{data.billing_address.address1}</p>
                                                        <p>{data.billing_address.address2}</p>
                                                        <p>{data.billing_address.pincode}</p>
                                                        <p>{data.billing_address.city}</p>
                                                        <p>{data.billing_address.state}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            : null
                            }
                            
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
                                        <p className="light">{count} Items</p>
                                        <p className="light">{price} Rs</p>
                                        <input type="text" style={{border: '0px',borderBottom: '2px solid #CECECE4D',boxShadow: 'none' }} className="form-control" placeholder="promo Code" />
                                        <p className="light"><span className="text-danger">10%</span></p>
                                        <p className="light">50 Rs</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="price m-0 me-3"><b>Total</b></p>
                                    <p className="price m-0"><b>₹ {price}</b></p>
                                </div>
                                <hr />
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="d-flex justify-content-end mt-4">
                        <Link to="/checkout" className="btn btn-outline-success me-4">Go Back</Link>
                        <Link to="/payment" className="btn btn-success">Pay Amount</Link>
                    </div>
                    
                </div>
                
            </section>
            : null
                }
            <Footer />
        </div>
    )
}

export default Checkout;
