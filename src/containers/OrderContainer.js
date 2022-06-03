import { CircularProgress } from "@mui/material";
import Box from '@mui/material/Box';
import React from "react";
import { Col, Row } from "react-bootstrap";
import OrderForm from "../components/OrderForm";

export default function OrderContainer() {
    const [loader, setLoader] = React.useState(true);
    const [error, setError] = React.useState('');
    const [context, setContext] = React.useState('order_for');

  return (
    <div>
      {context==='order_form' && <OrderForm/>}  
      {loader && <Box sx={{ display: 'flex',justifyContent:'center',margin:'10rem' }}>
      <CircularProgress size={100} sx={{color:'#64c9d1'}}/>
    </Box>}  

    </div>
  );
}
