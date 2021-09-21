import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import {favourites} from '../api/favourites';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FavouritesTable() {


    const [itemFavourites, setItemFavourites] = useState ([])

    useEffect(() => {
        favourites(setItemFavourites)
    }, [])


    

     const removeFavourites = (id) => {


        let tokenUser = localStorage.getItem('user_token')
        var axios = require('axios');
        var data = new FormData();
        data.append('id', id);

        var config = {
            method: 'DELETE',
            url: `https://smyworks.com/products/favourites`,
            headers: { 
                'Authorization': `token ${tokenUser}`, 
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            console.log(response.data)
            favourites(setItemFavourites)
        })
        .catch(function (error) {
            console.log(error);
        });
    }



    let history = useHistory()

    const columns = [
        {
            title: 'Product Id',field:'id'
        },
        {
            title: 'Product Name',field:'product_name'
        },
        {
            title: 'price',field:'price'
        },
        {
            title: 'Offer price',field:'offer_price'
        },

        {
            title: "Remove",
            field: "internal_action",
            editable: false,
            render: (rowData) =>
                rowData && (
                 <>
                    <Button variant="contained" onClick={() => {
                        toast("Removed from favorites") 
                        removeFavourites(rowData.id)
                    } }  style={{background: '#D04545',color: '#fff'}}>
                        Remove
                    </Button>
                    
                 </>
                )
        },

        {
            title: "View",
            field: "internal_action",
            editable: false,
            render: (rowData) =>
                rowData && (
                 <Button onClick={() => {
                     console.log(rowData.id)
                     history.push(`/detail/${rowData.id}`)
                 }} variant="contained"  style={{background: 'green',color: '#fff'}}>
                    View Item
                  </Button>
                )
        },
        
    ]


    return (
            <div id="content">
                <ToastContainer toastStyle={{ backgroundColor: "#2AA786",color: '#fff' }} />
                <MaterialTable 
                    title="All Orders" 
                    data={itemFavourites}
                    columns={columns}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1
                    }}


                />

             </div>
    )
}

export default FavouritesTable;
