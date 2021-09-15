import React, {useEffect, useState} from 'react';
import Footer from '../navigation/Footer';
import ProductNavigation from '../navigation/ProductNavigation';
import {getShops} from '../api/getShops';
import ExtendShop from '../navigation/ExtendShop';


function All() {


    const [shops,setShops] = useState ([])

    useEffect(() => {
        getShops(setShops)
    }, [])

    
    return (
        <div className="products-main">
                <div className="products">
                    <div className="container-fluid">
                        <ProductNavigation />
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {/* <div className="col-lg-3">
                                    <h4>Filters</h4>
                                </div> */}
                                <div className="col-lg-12">
                                        <div className="row">
                                                <ExtendShop extShops={shops} />
                                        </div>
                                </div>
                            </div>                            
                        </div>
                    </section>
                </div>
            <Footer />
        </div>
    )
}

export default All;
