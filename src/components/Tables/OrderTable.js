import React, {useState , useEffect} from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import {trackOrder} from '../api/trackOrder';
import {myOrders} from '../api/myOrders';
import {orderSummary} from '../api/orderSummary';
import Tracker from '../basic/Tracker';



function OrdersTable({orders}) {


    const [track,setTrack] = useState([])
    const [product,setProducts] = useState([])
    const [summary,setSummary] = useState([])
    const [tracker,setTracker] = useState()

    useEffect(() => {
        myOrders(setProducts)
    },[])

    const columns = [
        {
            title: 'Order Id',field:'order_id'
        },
        {
            title: 'Created Date',field:'start_date',
            render: (rowData) => (<Moment format="YYYY/MM/DD" >{rowData.start_date}</Moment> ),
        },
        {
            title: 'Items',field:'items',
            render: (rowData) => (rowData.items.length + " Items")
        },
        {
            title: "Status",field:"being_delivered",
            render: (rowData) => (rowData.being_delivered == false ? "OnProcess" : "Delivered")
        },
        {
            title: 'Total',field:'amount'
        },
        {
            title: "Track Order",
            field: "internal_action",
            editable: false,
            render: (rowData) => {
                 return (
                    <Button onClick={ () => {
                        trackOrder(setTrack,rowData.id,setTracker)
                    }     
                    } variant="contained" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{background: '#0F956A',color: '#fff'}}>
                        Track Order
                    </Button>
                 )
            }
        },
        {
            title: "View Order",
            field: "internal_action",
            editable: false,
            render: (rowData) => {
                 return (
                    <Button onClick={ () => {
                        orderSummary(setSummary,rowData.id)
                    }     
                    } variant="contained" data-bs-toggle="modal" data-bs-target="#detailModal" style={{background: '#0F956A',color: '#fff'}}>
                        View Order
                    </Button>
                 )
            }
        },
        
    ]


    return (
            <div id="content">
                <MaterialTable 
                    title="All Orders" 
                    data={orders}
                    columns={columns}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1
                    }}

                    
                />

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-dark" id="exampleModalLabel">Tracking Status</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <Tracker orderTracker={tracker} />

                                        <div className="mt-4">
                                            <p>Order ID <span className="text-success">#{track.order_id}</span></p>
                                            <p>Estimated Delivery Time <span className="text-success">25 to 30 Minutes</span></p>
                                            <h6><b style={{fontWeight: '500'}}>Address</b></h6>
                                            {track && track.billing_address ? 
                                                <>
                                                    <p className="mb-1">{track.billing_address.first_name}</p>
                                                    <p className="mb-1">{track.billing_address.last_name}</p>
                                                    <p className="mb-1">{track.billing_address.email}</p>
                                                    <p className="mb-1">{track.billing_address.address1}</p>
                                                    <p className="mb-1">{track.billing_address.address2}</p>
                                                    <p className="mb-1">{track.billing_address.pincode}</p>
                                                    <p className="mb-1">{track.billing_address.city}</p>
                                                    <p className="mb-1">{track.billing_address.state}</p>
                                                </>
                                                
                                                :
                                                null
                                              }
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-success">Report</button>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModal" aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-dark" id="detailModal">Order Details</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="row">
                                              {summary ?
                                                summary.map((product,i) => {
                                                    return (
                                                        <>
                                                            <div className="col-lg-4">
                                                                <p>Product Name: {product.product_name}</p>
                                                                <p>Product price: {product.offer_price ? product.offer_price : product.price}</p>
                                                                <p>Product Shop: {product.shop.shop_name}</p>
                                                                <p>Product Category: {product.category.category_name}</p>
                                                                <p>Product Description: {product.products_description}</p>
                                                                <p>Product Tag: {product.product_name}</p>
                                                            </div>
                                                        </>
                                                    )
                                                })  

                                                : <p>No Products</p>
                                            }
                                              
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-success">Report</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                

             </div>
    )
}

export default OrdersTable;
