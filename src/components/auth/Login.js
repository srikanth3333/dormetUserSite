import React, {useState,useEffect} from 'react';
import { useLocation,useHistory } from "react-router-dom";
import axios from 'axios';
import OtpInput from 'react-otp-input';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    let history = useHistory();
    let location = useLocation();

    const [otp,setOtp] = useState('')
    const [mobile,setMobile] = useState('')
    const [showotp,setShowOtp] = useState(false)


    const handleChange = (otp) =>setOtp(otp);


    useEffect(() => {
        if(location.pathname == '/login')
        $('.navbar_main').hide()
    },[])


    const verifyOtp = (e) => {
        e.preventDefault();
        var mobile_number = localStorage.getItem('mobile_number')
        var FormData = require('form-data');
        var data = new FormData();
        data.append('otp', otp);
        data.append('mobile', mobile_number);

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/accounts/otp',
            data : data
        };

        axios(config)
        .then(function (response) {
            if(response.data.message =='success') {
                window.location.href = '/'
                localStorage.setItem('loginStatus','loggedIn')
                
            }else {
                toast("Wrong OTP")
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function mobileSubmit(e) {
       e.preventDefault();
       console.log(mobile)
        var myHeaders = new Headers();
        var formdata = new FormData();
        formdata.append("mobile", mobile);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/accounts/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.message)
            if(result.message == "success"){
                console.log('result')
                setShowOtp(true)
                localStorage.setItem("user_otp",result.otp)
                localStorage.setItem("mobile_number",mobile)
                toast("OTP Sent Successfully")
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className="register">
            <ToastContainer toastStyle={{ backgroundColor: "#2AA786",color: '#fff' }} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        
                    </div>
                    <div className="col-lg-6  main_reg">
                        <div className="d-flex  justify-content-center align-items-center">
                            <div className="reg_box reg_active">
                                <p className="reg_p">Enter Mobile Number</p>
                            </div>
                        </div>
                        {showotp ? null :
                            <form onSubmit={mobileSubmit}>
                            <div className="row justify-content-between align-items-center">
                                <div className="form-group col-lg-8">
                                    <div class="input-group ">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                        <input onChange={(e) => {
                                            setMobile(e.target.value)
                                        }} type="text" class="form-control reg_input" placeholder="Enter your mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="form-group col-lg-4">
                                    <button className="btn btn-success w-100">REQUEST OTP</button>
                                </div>
                            </div>
                        </form>
                        }
                        {showotp ? 
                            <form action="" onSubmit={verifyOtp}>
                            <div className="row my-4">
                                <div className="col-lg-8 otp_input">
                                    <label htmlFor="" className="mb-3">Enter your Otp</label>
                                    <OtpInput
                                        value={otp}
                                        onChange={handleChange}
                                        numInputs={4}
                                        inputStyle={{with: '100%'}}
                                    />
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <button className="btn btn-success w-100">Verify</button>
                                </div>
                            </div>
                            </form>
                            
                            :
                            null
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
