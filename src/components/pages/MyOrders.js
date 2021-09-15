import React, {useEffect,useState} from 'react';
import Footer from '../navigation/Footer';
import OrderTable from '../Tables/OrderTable';
import {myOrders} from '../api/myOrders';
import ProfileNavigation from '../navigation/ProfileNavigation';



function MyOrders() {

    const [order,setOrder] = useState([])
   

    useEffect(() => {
        myOrders(setOrder)
    },[])

    return (
        <div className="main-orders">
                <section className="orders">
                    <div className="container-fluid px-4" >
                        <div className="row">
                            <div className="col-lg-2">
                                <ProfileNavigation active="orders" />
                            </div>
                            <div className="col-lg-10">
                                <OrderTable orders={order} />
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </div>
    )
}

export default MyOrders;
