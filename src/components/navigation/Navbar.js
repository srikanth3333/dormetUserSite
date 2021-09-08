import React from 'react';
import {useHistory} from 'react-router-dom';

function Navbar() {


    let history = useHistory();
    
    return (
        <div className="navbar_main">
            <div className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-lg-2">
                    <div className="form-groups">
                        <div class="input-group ">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">?</span>
                        </div>
                         <input type="text" class="form-control reg_input" readOnly placeholder="Hyderabad" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-groups">
                            <div class="input-group ">
                            <div class="input-group-prepend">
                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                <select name="" id="" className="form-control select">
                                    <option className="text-success" value="">All Categories</option>
                                </select>
                            </div>
                            <input type="text" class="form-control reg_input" placeholder="Search for product or grocery" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="">
                         <a>My Orders</a>
                         <button className="btn btn-light mx-3">Login</button>
                         <button className="btn btn-light">Sign Up</button>
                    </div>
                    
                </div>
                <div className="col-lg-1 text-right">
                    <p className="text-white">Your Cart <br/>
                    <span style={{fontSize: '1.3em',color: '#fff'}}>$625</span>
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar
