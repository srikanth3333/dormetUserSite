import React from 'react'
import Footer from '../navigation/Footer';
import {Link} from 'react-router-dom'

function PageNotFound() {
    return (
        <div>
            <section className="no_page p-0 text-center">
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_afwjhfb2.json"  background="transparent"  speed="1"  style={{width: '500px',height: '500px', margin: 'auto'}}  loop autoplay></lottie-player>
                <Link to="/" className="btn btn-success mb-3">Go To Home</Link>
            </section>
            <Footer />
        </div>
    )
}

export default PageNotFound;
