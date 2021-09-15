import React, {useState, useEffect} from 'react';
import Footer from '../navigation/Footer';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import card from "../img/card.jpg";
import {cartList} from '../api/cartList';
import {useHistory} from 'react-router-dom';
import {payment} from '../api/payment';

function Payment({token}) {

    const [cartItem,setCartItem] = useState([])
    const [count, setCount] = useState('')
    const [price, setPrice] = useState('')

    let history = useHistory()

    var mobile = localStorage.getItem('mobile_number')
    

    useEffect(() => {
        cartList(setCartItem,token,'',setCount,setPrice)
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    },[])

    console.log()

    const options = {
        key: 'rzp_test_pXWn3PypYd4NNg',
        amount: price * 100,
        name: 'Dormet',
        description: 'Ecommerce Payment',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            let order_id = Math.floor(Math.random() * (100000 - 10000) ) + 10000
            let shop_name = cartItem[0].item.shop.shop_name
            if(response.razorpay_payment_id) {
                payment(price,response.razorpay_payment_id,order_id,shop_name)
                history.push(`/confirmation/${order_id}`)
            }else {
                alert("Your Payment is not completed")
            }
        },
        prefill: {
            name: '',
            contact: mobile,
            email: ''
        },
        
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div className="main-checkout">
            {cartItem != 0 ?
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
                            <div className="box2 box box-green">
                                3
                            </div>
                            <p className="step-text text-success">Payment</p>
                        </div>
                        <div className="line"></div>
                        <div className="box-holder">
                            <div className="box2 box">
                                4
                            </div>
                            <p className="step-text">Confirmation</p>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-lg-6 p-5">
                        <div className="">
                        <div className="">

                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Add a card
                        </label>
                        </div>
                        <div>
                            <img src={card} alt="" />
                        </div>
                        </div>

                            
                            </div>
                        </div>

                        <div className="col-lg-6">
                        <div className="text-center p-5">
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
                        <button className="btn btn-outline-success me-4">Go Back</button>
                        <button onClick={openPayModal}  className="btn btn-success">Pay Amount</button>
                    </div>
                </div>
            </section>
            : null }
            <Footer />
        </div>
    )
}

export default Payment;
