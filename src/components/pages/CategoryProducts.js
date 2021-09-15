import React, {useEffect, useState} from 'react';
import Footer from '../navigation/Footer';
import {categoryDetail} from '../api/categoryDetail';
import {useParams} from 'react-router-dom';
import Product from '../navigation/Product';
import {allRatings} from '../api/allRatings';

function CategoryProducts() {


    let {id} = useParams()

    const [products,setProducts] = useState ([])
    const [ratings,setRatings] = useState ([])
    

    useEffect(() => {
        categoryDetail(setProducts,id)
        allRatings(setRatings)
    }, [])



    return (
        <div className="products-main">
                <div className="products">
                    <section className="content py-2">
                        <div className="container-fluid">
                            <h2 className="text-center">Category Based products</h2>
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

export default CategoryProducts;
