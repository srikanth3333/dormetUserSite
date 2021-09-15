import React from 'react';
import Footer from '../navigation/Footer';
import FavouritesTable from '../Tables/FavouritesTable';
import ProfileNavigation from '../navigation/ProfileNavigation';



function Favourites() {

  

    return (
        <div className="main-orders">
                <section className="orders">
                    <div className="container-fluid px-4" >
                        <div className="row">
                            <div className="col-lg-2">
                                <ProfileNavigation active="fav" />
                            </div>
                            <div className="col-lg-10">
                                <FavouritesTable />
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </div>
    )
}

export default Favourites;
