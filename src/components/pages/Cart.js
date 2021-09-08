import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import product from "../img/product.jpg";
import DeleteIcon from '@material-ui/icons/Delete';

function Cart() {
    return (
        <div className="main-cart">
            <Navbar />
            <section className="cart">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7">
                        <p>Cart</p>
                        <table class="table table-borderless">
                        <thead>
                            <tr style={{background: '#FFF3D0',fontWeight: '400'}}>
                            <th scope="col">S No</th>
                            <th scope="col">Product / Service</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td><img src={product} height="30px" className="me-2" />Kit Kat Chocolate</td>
                            <td><AddBoxIcon  style={{color: '#2AA786'}} fontSize="large" /><span className="mx-3">1</span><IndeterminateCheckBoxIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            <td>230</td>
                            <td><DeleteIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td><img src={product} height="30px" className="me-2" />Kit Kat Chocolate</td>
                            <td><AddBoxIcon style={{color: '#2AA786'}} fontSize="large" /><span className="mx-3">1</span><IndeterminateCheckBoxIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            <td>230</td>
                            <td><DeleteIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td><img src={product} height="30px" className="me-2" />Kit Kat Chocolate</td>
                            <td><AddBoxIcon style={{color: '#2AA786'}} fontSize="large" /><span className="mx-3">1</span><IndeterminateCheckBoxIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            <td>230</td>
                            <td><DeleteIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td><img src={product} height="30px" className="me-2" />Kit Kat Chocolate</td>
                            <td><AddBoxIcon style={{color: '#2AA786'}} fontSize="large" /><span className="mx-3">1</span><IndeterminateCheckBoxIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            <td>230</td>
                            <td><DeleteIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td><img src={product} height="30px" className="me-2" />Kit Kat Chocolate</td>
                            <td><AddBoxIcon style={{color: '#2AA786'}} fontSize="large" /><span className="mx-3">1</span><IndeterminateCheckBoxIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            <td>230</td>
                            <td><DeleteIcon style={{color: '#2AA786'}} fontSize="large" /></td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                        <div className="col-lg-5">
                            <div className="main-border">

                                <div className="text-center">
                                    <h4 >Summary</h4>
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
                                    <button className="btn btn-success mt-4">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Cart
