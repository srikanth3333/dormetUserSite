import React, {useState, useEffect} from 'react';
import Footer from '../navigation/Footer';
import ProductNavigation from '../navigation/ProductNavigation';
import {getShops} from '../api/getShops';
import {getProducts} from '../api/getProducts';
import Product from '../navigation/Product';
import ExtendShop from '../navigation/ExtendShop';
import {allRatings} from '../api/allRatings';

function All() {

    const [products,setProducts] = useState ([])
    const [shops,setShops] = useState ([])
    const [ratings,setRatings] = useState ([])

    useEffect(() => {
        getProducts(setProducts)
        getShops(setShops)
        allRatings(setRatings)
    }, [])


    return (
        <div className="products-main">
                <div className="products">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <ProductNavigation />
                        </div>
                    </div>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="d-flex ">
                                 <h5 className="sec-header me-3"> SHOPS </h5>
                            </div>
                            
                            <div className="row">
                              <ExtendShop extShops={shops} />
                            </div>


                            <div className="d-flex mt-5">
                                 <h5 className="sec-header me-3">PRODUCTS</h5>
                            </div>

                            
                            <div className="row">
                                <Product product={products} mainRatings={ratings} />
                            </div>
                            
                        </div>
                    </section>
                </div>
            <Footer />
        </div>
    )
}

export default All;
