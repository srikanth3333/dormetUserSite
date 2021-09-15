import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import {favourites} from '../api/favourites'


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
            url: `http://127.0.0.1:8000/products/favourites`,
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
                 <Button variant="contained" onClick={() => removeFavourites(rowData.id)}  style={{background: '#D04545',color: '#fff'}}>
                    Remove
                  </Button>
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
                    View Order
                  </Button>
                )
        },
        
    ]


    return (
            <div id="content">
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
