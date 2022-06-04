import { CircularProgress } from "@mui/material";
import Box from '@mui/material/Box';
import React from "react";
import { Col, Row } from "react-bootstrap";
import Error from "../components/Error";
import Loader from "../components/Loader";
import OrderConfirmation from "../components/OrderConfirmation";
import OrderForm from "../components/OrderForm";

export default function OrderContainer() {
    const [loader, setLoader] = React.useState(false);
    const [error, setError] = React.useState('');
    const [context, setContext] = React.useState('order_form');

  return (
    <div>
      {context==='order_form' && !loader&& <OrderForm setLoader={setLoader} setError={setError} setContext={setContext}/>}  
      {loader && <Loader/>}  
      {context==='order_summary' && !loader&& <OrderConfirmation/>}  
      {context==='error' && !loader&& <Error msg={error}/>}
    </div>
  );
}
