import React, {useEffect, useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {categories} from '../api/categories';
import {cartCount} from '../api/cartCount';


function Navbar({changeWord,token,userCart}) {

    let history = useHistory()

    const [category,setCategory] = useState([])
    const [searchText,setSearchText] = useState('')
    const [changeMyText,setChangeMyText] = useState('')

    useEffect(() => {
        categories(setCategory)
        cartCount(setChangeMyText,token)
    }, [])

    const productCategory = (id) => history.push(`/products/category/${id}`)
    const searchForm = (e) => {
        e.preventDefault();
        history.push(`/products/search/${searchText}`)
    }


    
    return (
        <div className="navbar_main">
            <div className="container-fluid">
            <div className="row justify-content-evenly">
                <div className="col-lg-2">
                    <div className="form-groups">
                        <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                            </span>
                        </div>
                            <input type="text" class="form-control reg_input" readOnly placeholder={changeMyText} aria-label="Username" aria-describedby="basic-addon1" />
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-groups">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <select name="" onChange={(e) => productCategory(e.target.value)} id="" className="form-control select">
                                        <option className="text-success" selected>All Categories</option>
                                        {category.map((item) => {
                                            return (
                                                <option className="text-success" value={item.id}>{item.category_name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                
                                    <input type="text" onChange={(e) => setSearchText(e.target.value)}class="form-control reg_input" placeholder="Search for product or grocery" aria-label="Username" aria-describedby="basic-addon1" />
                                    <button type="submit" onClick={(e) => searchForm(e)} class="btn btn-primary">Search</button>
                                
                            </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex justify-content-between ">
                         
                         {token != '' ?
                            <>
                                <Link className="mt-1" to="/orders">My Orders</Link>
                                <div class="dropdown">
                                    <img src="http://ormondemining.com/wp-content/uploads/2020/10/person-icon-silhouette-png-0-300x300.jpg"  class="profile_img dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    </img>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link class="dropdown-item" to="/account">My Profile</Link></li>
                                        <li><button class="dropdown-item" onClick={() => {
                                            console.log('logout')
                                            localStorage.clear();
                                            window.location.href = '/'
                                        }} >Logout</button></li>
                                    </ul>
                                </div>
                                <div>
                                <Link to="/cart" class=" position-relative">
                                <i class="bi bi-basket"></i>
                                <span class="position-absolute top-5 start-140 translate-middle badge rounded-pill bg-secondary">
                                    {userCart ? userCart : 0}
                                    <span class="visually-hidden"></span>
                                </span>
                                </Link>
                                    
                                </div>
                                {/* <div className="text-right ">
                                    <p className="text-white">Your Cart <br/>
                                    <span style={{fontSize: '1.3em',color: '#fff'}}>$625</span>
                                    </p>
                                </div> */}
                            </>
                          : 
                          <>    
                                <div>
                                    <Link to="/login" className="btn btn-light mx-3">Login</Link> 
                                    <Link to="/login" className="btn btn-light">Sign Up</Link>    
                                </div>
                            </>
                        }
                         
                    </div>
                    
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default Navbar
