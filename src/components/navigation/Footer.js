import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="spec-box">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-lg-4 text-center">
                            <h4 >Fastest <br /> Delivery</h4>
                        </div>
                        <div className="col-lg-4">
                            <h4>Track Your <br /> Orders</h4>
                        </div>
                        <div className="col-lg-4">
                            <h4>Save <br /> Your Time</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <h5>Quick Links</h5>
                    <p><a href="">Home</a></p>
                    <p><a href="">Trending Products</a></p>
                    <p><a href="">Featured products</a></p>
                    <p><a href="">My Account</a></p>
                    <p><a href="">Orders</a></p>
                    <p><a href="">Stores</a></p>
                </div>
                <div className="col-lg-3">
                    <h5>Terms</h5>
                    <p><a href="">Home</a></p>
                    <p><a href="">Trending Products</a></p>
                    <p><a href="">Featured products</a></p>
                    <p><a href="">My Account</a></p>
                    <p><a href="">Orders</a></p>
                    <p><a href="">Stores</a></p>
                </div>
                <div className="col-lg-2">
                    <h5>Contact Us</h5>
                    <p><a href="">Home</a></p>
                    <p><a href="">Trending Products</a></p>
                    <p><a href="">Featured products</a></p>
                    <p><a href="">My Account</a></p>
                    <p><a href="">Orders</a></p>
                    <p><a href="">Stores</a></p>
                </div>
                <div className="col-lg-4">
                     <h5>News Letter</h5>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla tenetur dignissimos aspernatur molestiae beatae obcaecati recusandae dolorem ad maxime.</p>
                     <input type="text" className="form-control subs_input" placeholder="Please Enter your mobile Number" />
                </div>
            </div>
            </div>
            <hr />
            <div className="text-center container-fluid">
                <p className="light ">&copy; Dormet 2021 | All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
