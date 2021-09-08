import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function OrdersTable() {



    const classes = useStyles();
    const [age, setAge] = React.useState(20);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const data = [
        {id:'#323456789',date:'12-01-12',items:'18 Items',status:'Delivered',total:'443'}
    ]

    const columns = [
        {
            title: 'Order Id',field:'id'
        },
        {
            title: 'Created Date',field:'date'
        },
        {
            title: 'Items',field:'items'
        },
        {
            title: "Status",field:"status"
        },
        {
            title: 'Total',field:'total'
        },
        {
            title: "Track Order",
            field: "internal_action",
            editable: false,
            render: (rowData) =>
                rowData && (
                 <Button variant="contained" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{background: '#0F956A',color: '#fff'}}>
                    Track Order
                  </Button>
                )
        },
        
    ]


    return (
            <div id="content">
                <MaterialTable 
                    title="All Orders" 
                    data={data}
                    columns={columns}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1
                    }}


                    actions={[
                    {
                        icon: 'visibility',
                        tooltip: 'View Order',
                        onClick: (event, rowData) => {
                            console.log(rowData.name);
                        }
                    }
                    ]}

                    

                />

             </div>
    )
}

export default OrdersTable;
