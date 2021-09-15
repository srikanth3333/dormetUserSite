import React from 'react';
import Footer from '../navigation/Footer';
import Profile from '../basic/Profile';
import ProfileNavigation from '../navigation/ProfileNavigation';



function MyAccount() {
    return (
        <div className="main-orders">
                <section className="orders">
                    <div className="container-fluid px-4" >
                        <div className="row">
                            <div className="col-lg-2">
                                <ProfileNavigation active="account" />
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
