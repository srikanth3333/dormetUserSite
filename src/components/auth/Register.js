import React from 'react';
import Otp from './Otp';
import { useHistory } from "react-router-dom";


function Register() {

    let history = useHistory();

    function handleClick() {
        history.push("/login");
    }

    return (
        <div className="register">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        
                    </div>
                    <div className="col-lg-6  main_reg">
                        <div className="d-flex  justify-content- align-items-center">
                            <div className="reg_box" onClick={() => handleClick()}>
                                <p className="reg_p">Login</p>
                            </div>
                            <div className="reg_box reg_active">
                                 <p className="reg_p ">Create an account</p>
                            </div>
                        </div>
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
                                <button className="btn btn-success">REQUEST OTP</button>
                            </div>
                            {/* <div className="col-lg-8 otp_input">
                                <Otp inputStyle={{with: '100%'}} />
                            </div>
                            <div className="col-lg-4">
                                <button className="btn btn-success">Verify</button>
                            </div> */}
                        </div>
                        <p className="">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas id animi iusto repudiandae cupiditate reiciendis tempore magnam ipsa fuga voluptatem?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
