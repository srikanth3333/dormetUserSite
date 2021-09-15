import React, {useEffect, useState} from 'react';
import Footer from '../navigation/Footer';
import {shopProducts} from '../api/shopProducts';
import {useParams} from 'react-router-dom';
import Product from '../navigation/Product';
import {allRatings} from '../api/allRatings';

function ShopProducts() {


    let {id} = useParams()

    const [products,setProducts] = useState ([])
    const [ratings,setRatings] = useState ([])
    

    useEffect(() => {
        shopProducts(setProducts,id)
        allRatings(setRatings)
    }, [])



    return (
        <div className="products-main">
                <div className="products">
                    <section className="content py-2">
                        <div className="container-fluid">
                            <h2 className="text-center">Shop products</h2>
                            <div className="row">
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

export default ShopProducts;
