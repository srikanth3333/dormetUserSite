import React from 'react';
import Otp from './Otp';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {addLogin} from '../../redux/authentication/authSlice';

function Login() {

    let history = useHistory();

    const dispatch = useDispatch();

    function mobileSubmit(e) {
        e.preventDefault();
        dispatch(addLogin({
            title: "something"
        }))
        console.log('click')
    }

    return (
        <div className="register">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        
                    </div>
                    <div className="col-lg-6  main_reg">
                        <div className="d-flex  justify-content-center align-items-center">
                            <div className="reg_box reg_active">
                                <p className="reg_p">Login</p>
                            </div>
                            <div className="reg_box ">
                                 <p className="reg_p ">Create an account</p>
                            </div>
                        </div>
                        <form onSubmit={mobileSubmit}>
                            <div className="row justify-content-between align-items-center">
                                <div className="form-group col-lg-8">
                                    <div class="input-group ">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                    <input type="text" class="form-control reg_input" placeholder="Enter your mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
                                    
                                    </div>
                                </div>
                                <div className="form-group col-lg-4">
                                    <button className="btn btn-success w-100">REQUEST OTP</button>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-lg-8 otp_input">
                                <Otp inputStyle={{with: '100%'}} />
                            </div>
                            <div className="col-lg-4">
                                <button className="btn btn-success w-100">Verify</button>
                            </div>
                        </div>
                        {/* <p className="">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas id animi iusto repudiandae cupiditate reiciendis tempore magnam ipsa fuga voluptatem?
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
