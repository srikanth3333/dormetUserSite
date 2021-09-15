import React, {useState, useEffect} from 'react';
import Footer from '../navigation/Footer';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import product from "../img/product.jpg";
import DeleteIcon from '@material-ui/icons/Delete';
import {cartList} from '../api/cartList';
import {addToCart} from '../api/addToCart';
import {removeFromCart} from '../api/removeFromCart';
import {removeSingleFromCart} from '../api/removeSingleFromCart';
import {useHistory,Link} from 'react-router-dom';
import {cartCount} from '../api/cartCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart({token,changeWord}) {

    const [cartItem,setCartItem] = useState([])
    const [discount, setDiscount] = useState(0)
    const [count, setCount] = useState('')
    const [price, setPrice] = useState('')

    const [cartNavCount,setCartNavCount] = useState ()



    let history = useHistory()
    useEffect(() => {
        cartList(setCartItem,token,discount,setCount,setPrice)
    }, [count])

    
    return (
        <div className="main-cart">
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
                            {
                                cartItem.length == 0 ? <h2>No Items In Cart</h2>
                                :
                                cartItem.map((list,i) => {
                                    return (
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td><img src={product} height="30px" className="me-2" />{list.item.product_name}</td>
                                                <td>
                                                        <IndeterminateCheckBoxIcon 
                                                            onClick={() => {
                                                                cartList(setCartItem,token,discount,setCount,setPrice)
                                                                removeSingleFromCart(list.item.id,token)
                                                                cartList(setCartItem,token,discount,setCount,setPrice)
                                                                cartCount(setCartNavCount,token)
                                                                changeWord(cartNavCount)
                                                                toast("Quantity Decreased")
                                                            }}
                                                        style={{color: '#2AA786'}} fontSize="large" />
                                                                <span className="mx-3">{list.quantity}</span>
                                                        <AddBoxIcon onClick={() => {
                                                            cartList(setCartItem,token,discount,setCount,setPrice)
                                                            addToCart(list.item.id,list.quantity_in_grams,token)
                                                            cartList(setCartItem,token,discount,setCount,setPrice)
                                                            cartCount(setCartNavCount,token)
                                                            changeWord(cartNavCount)
                                                            toast("Quantity Updated")
                                                        }} style={{color: '#2AA786'}} fontSize="large" />
                                                        <ToastContainer toastStyle={{ backgroundColor: "#2AA786",color: '#fff' }} />
                                                </td>
                                            <td>{list.item.offer_price ? list.item.offer_price : list.item.price} <del>{list.item.price}</del></td>
                                            <td><DeleteIcon
                                                onClick={() => {
                                                    cartList(setCartItem,token,discount,setCount,setPrice)
                                                    removeFromCart(list.item.id,token)
                                                    cartList(setCartItem,token,discount,setCount,setPrice)
                                                    cartCount(setCartNavCount,token)
                                                    changeWord(cartNavCount)
                                                    toast("Product Removed Successfully")
                                                }}
                                            
                                            style={{color: '#2AA786'}} fontSize="large" /></td>
                                        </tr>
                                    )
                                })
                                
                            }
                            
                            
                        </tbody>
                        </table>
                        </div>
                        {cartItem != 0 ?
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
                                    <Link to="/checkout" className="btn btn-success mt-4">Checkout</Link>
                                </div>
                            </div>
                        </div>

                        : null
                        
                        }
                        
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Cart
