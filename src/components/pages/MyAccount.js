import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import Profile from '../basic/Profile';


function MyAccount() {
    return (
        <div className="main-orders">
            <Navbar />
                <section className="orders">
                    <div className="container-fluid px-4" >
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="nav-container">
                                    <a href="" className="nav-item active">My Profile</a>
                                    <a href="" className="nav-item">My Favouries</a>
                                    <a href="" className="nav-item">My Schduled Orders</a>
                                    <a href="" className="nav-item">Settings</a>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <Profile />

                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </div>
    )
}

export default MyAccount;
