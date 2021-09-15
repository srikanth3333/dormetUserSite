import React, {useEffect, useState} from 'react';
import Footer from '../navigation/Footer';
import ProductNavigation from '../navigation/ProductNavigation';
import {getProducts} from '../api/getProducts';
import Product from '../navigation/Product';
import {allRatings} from '../api/allRatings';

function All() {

    const [products,setProducts] = useState ([])
    const [ratings,setRatings] = useState ([])

    useEffect(() => {
        getProducts(setProducts)
        allRatings(setRatings)
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
                                            <Product product={products} mainRatings={ratings} />
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
