import React, {useState, useEffect} from 'react';
import Footer from '../navigation/Footer';
import {getAddress} from '../api/getAddress';
import {addAddress} from '../api/addAddress';
import {assignAddress} from '../api/assignAddress';
import {Link,useHistory} from 'react-router-dom'

function Checkout({token}) {

    let history = useHistory()

    const [address, setAddress] = useState([])
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [pincode, setPincode] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')


    useEffect(() => {
        getAddress(setAddress,token)
    },[])


    const addressForm = (e) => {
        e.preventDefault()
        addAddress(fName,lName,email,address1,address2,pincode,city,state)
        history.push('/review')
    }


 
    return (
        <div className="main-checkout">
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
                                {
                                    address.length == 0 ? 
                                    <div className="col-lg-12">
                                        <div className="d-flex">
                                        <input type="radio" className="me-2 mt-1"  />
                                         <p>Add New Delivery Address</p>
                                        </div>
                                        <form onSubmit={(e) => addressForm(e)}>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="">First Name</label>
                                                        <input onChange={(e) => setFName(e.target.value)} type="text" className="form-control" placeholder="Enter name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="">Last Name</label>
                                                        <input onChange={(e) => setLName(e.target.value)} type="text" className="form-control" placeholder="name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="">Email Address</label>
                                                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="form-group">
                                                        <label htmlFor="">Address Line 1</label>
                                                        <input onChange={(e) => setAddress1(e.target.value)} type="text" className="form-control" placeholder="Address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="">Phone Number</label>
                                                        {/* <input onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" placeholder="Mobile" /> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label htmlFor="">Address Line 2 / landmark</label>
                                                        <input onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" placeholder="Address 2" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Pincode</label>
                                                        <input onChange={(e) => setPincode(e.target.value)} type="text" className="form-control" placeholder="pincode" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">City</label>
                                                        <input onChange={(e) => setCity(e.target.value)} type="text" className="form-control" placeholder="city" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label htmlFor="">State</label>
                                                        <input onChange={(e) => setState(e.target.value)} type="text" className="form-control" placeholder="state" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Billing Address Same as Delivery Address
                                            </label>
                                            </div>
                                            <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-success">Add Address</button>
                                                    </div>
                                                </div>
                                        </form>
                                    </div>
                                    :
                                    address.map((data,i) => {
                                        return (
                                            <div className="col-lg-4">
                                                <div className="card my-3">
                                                    <div className="card-header">
                                                        <div class="form-check">
                                                            <input class="form-check-input" onChange={() => {
                                                                assignAddress(data.id)
                                                            }} type="radio" name="address" id={i}  />
                                                                <label class="form-check-label" for={i}>
                                                                    Select Address
                                                                </label>
                                                            </div>
                                                        </div>
                                                    <div className="card-body">
                                                        <p>{data.first_name}</p>
                                                        <p>{data.last_name}</p>
                                                        <p>{data.email}</p>
                                                        <p>{data.address1}</p>
                                                        <p>{data.address2}</p>
                                                        <p>{data.pincode}</p>
                                                        <p>{data.city}</p>
                                                        <p>{data.state}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <Link to="/review" className="btn btn-success"  disabled={addAddress}>Next</Link>
                            </div>
                        </div>
                        
            </section>
            <Footer />
        </div>
    )
}

export default Checkout;
