import React from 'react';
import {NavLink} from 'react-router-dom';

function ProductNavigation() {
    return (
        <>
            <div className="row justify-content-center p-nav">
                <div className="col-lg-6 text-center">
                    <NavLink exact activeClass="success-active" to="/all" className="btn btn-outline-success">All</NavLink>
                    <NavLink activeClass="success-active" to="/orders" className="btn btn-outline-success">Services</NavLink>
                    <NavLink activeClass="success-active" to="/products" className="btn btn-outline-success">products</NavLink>
                    <NavLink activeClass="success-active" to="/shops" className="btn btn-outline-success">Shops</NavLink>
                </div>
            </div>   
        </>
    )
}

export default ProductNavigation
