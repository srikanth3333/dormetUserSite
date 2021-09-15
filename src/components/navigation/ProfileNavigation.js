import React from 'react';
import {Link} from 'react-router-dom'

function ProfileNavigation({active}) {
    return (
        <>
            <div className="nav-container">
                <Link to="/account" className={active == 'account' ? `nav-item active` : `nav-item`}>Profile</Link>
                <Link to="/favourites" className={active == 'fav' ? `nav-item active` : `nav-item`}>Favourites</Link>
                <Link to="/orders" className={active == 'orders' ? `nav-item active` : `nav-item`}>My Orders</Link>
            </div>
        </>
    )
}

export default ProfileNavigation
