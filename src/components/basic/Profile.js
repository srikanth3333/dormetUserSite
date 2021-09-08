import React from 'react'

function Profile() {
    return (
        <div className="container-fluid">
            <form action="">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="">Name</label>
                                            <input type="text" className="form-control" placeholder="Enter name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" className="form-control" placeholder="name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="">Email Address</label>
                                            <input type="text" className="form-control" placeholder="email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <label htmlFor="">Address Line 1</label>
                                            <input type="text" className="form-control" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" className="form-control" placeholder="Mobile" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Address Line 2 / landmark</label>
                                            <input type="text" className="form-control" placeholder="Address 2" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="">Pincode</label>
                                            <input type="text" className="form-control" placeholder="pincode" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="">City</label>
                                            <input type="text" className="form-control" placeholder="city" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">State</label>
                                            <input type="text" className="form-control" placeholder="state" />
                                        </div>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-end mt-4">
                                    <button className="btn btn-success">Save</button>
                                </div>
                            </form>
        </div>
    )
}

export default Profile;
