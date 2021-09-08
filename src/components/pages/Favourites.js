import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';
import FavouritesTable from '../Tables/FavouritesTable';
import Tracker from '../basic/Tracker';


function Favourites() {
    return (
        <div className="main-orders">
            <Navbar />
                <section className="orders">
                    <div className="container-fluid px-4" >
                        <div className="row">
                        <div className="col-lg-2">
                                <div className="nav-container">
                                    <a href="" className="nav-item">My Profile</a>
                                    <a href="" className="nav-item active">My Favouries</a>
                                    <a href="" className="nav-item">My Schduled Orders</a>
                                    <a href="" className="nav-item">Settings</a>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <FavouritesTable />

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-dark" id="exampleModalLabel">Tracking Status</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <Tracker />

                                        <div className="mt-4">
                                            <p>Order ID <span className="text-success">#654yteytryer</span></p>
                                            <p>Estimated Delivery Time <span className="text-success">25 to 30 Minutes</span></p>
                                            <h6><b style={{fontWeight: '500'}}>Address</b></h6>
                                            <p className="mb-0">Tracy G, Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolor.</p>
                                            <p className="mb-0">Smondo Bengalore</p>
                                            <p className="mb-0">50813</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-success">Report</button>
                                    </div>
                                    </div>
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

export default Favourites;
