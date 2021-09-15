import React, {useState,useEffect} from 'react';
import {profile} from '../api/profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')

    useEffect(() => {
        profile(setEmail,setName,setMobile)
    }, [])


    const formSubmit = (e) => {
        e.preventDefault()
        console.log('fired')
        let tokenUser = localStorage.getItem('user_token')
        var axios = require('axios');
        var data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('mobile', mobile)

        var config = {
            method: 'POST',
            url: 'http://127.0.0.1:8000/products/profile',
            headers: { 
                'Authorization': `token ${tokenUser}`, 
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            profile(setEmail,setName,setMobile)
            toast("Profile Updated Successfully")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="container-fluid">
            <form onSubmit={(e) => formSubmit(e)} method="post">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <img src="http://ormondemining.com/wp-content/uploads/2020/10/person-icon-silhouette-png-0-300x300.jpg" style={{height: '140px',borderRadius: '20px'}} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" value={email} placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="">Mobile Number</label>
                            <input type="number" disabled onChange={(e) => setMobile(e.target.value)} className="form-control" value={mobile} placeholder="name" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" value={name} placeholder="email" />
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-success">Update Profile</button>
                </div>
            </form>
            <ToastContainer toastStyle={{ backgroundColor: "#2AA786",color: '#fff' }} />
        </div>
    )
}

export default Profile;
