import React from "react";
import { Field, reduxForm, change, formValueSelector } from "redux-form";
import TextField from "@mui/material/TextField";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import Checkbox from "@mui/material/Checkbox";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
//import asyncValidate from './asyncValidate';
import validate from "../util/validations";
import renderTextField from "../components/form-elements/renderTextField";
import { FormControlLabel } from "@mui/material";
import renderCheckbox from "../components/form-elements/renderCheckbox";
import RenderSelectField from "../components/form-elements/renderSelectField";
import Heading from "../components/Heading";
import { Row, Col } from "react-bootstrap";
import RenderSearchField from "../components/form-elements/renderSearchField";
import { useSelector, useDispatch, connect } from "react-redux";
import { setAddressDetails } from "../actions/addressActions";

let OrderForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const { country, search } = props;

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (search) {
      setAddressDetails(dispatch,search);
    }
  }, [dispatch,search]);

  return (
    <div>
    <div onSubmit={handleSubmit} style={{ padding: '2rem 36rem 0rem 18rem' }}>
      <div className="mb-3">
        <Heading title={"Your Details"} />
      </div>
      <Row className="mb-2">
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="firstName"
              component={renderTextField}
              label="First Name"
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="lastName"
              component={renderTextField}
              label="Last Name"
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="email"
              component={renderTextField}
              label="Email Address"
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="mobileNumber"
              component={renderTextField}
              label="Mobile Number"
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Heading title={"Your Address"} />
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <div>
            <Field
              name="country"
              component={RenderSelectField}
              label="Country"
              type="select"
            ></Field>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={12}>
          <Field
            className="w-100"
            name="search"
            component={RenderSearchField}
            label="Type part of an address or postcode EG: AM5 6QH or 84 Sir Matt Busby Way"
            country={country}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="address1"
              component={renderTextField}
              label="Address Line 1"
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="address2"
              component={renderTextField}
              label="Address Line 2"
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="city"
              component={renderTextField}
              label="Town/City"
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="state"
              component={renderTextField}
              label="County/Province/State"
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <div>
            <Field
              className="w-100"
              name="postalCode"
              component={renderTextField}
              label="Postal Code"
            />
          </div>
        </Col>
      </Row>
     
      <div className="mb-5">
        <Heading title={"Preferrences"} />
      </div>
      </div>
      <Row style={{ padding: '0rem 0rem 0rem 18rem' }}>
        <Col md={7}>
      <div className="light-text">I’d like to hear more about</div>
      <Row className="mb-5">
        <Col md={3}>
          <Field name="cars" component={renderCheckbox} label="Cars" />
        </Col>
        <Col md={3}>
          <Field name="books" component={renderCheckbox} label="Books" />
        </Col>
        <Col md={3}>
          <Field name="watches" component={renderCheckbox} label="Watches" />
        </Col>
        <Col md={3}>
          <Field name="laptops" component={renderCheckbox} label="Laptops" />
        </Col>
      </Row>
      </Col>
      <Col md={5} className='line'>
      <div class='trapezoid mt-3 mx-3'><span>Save</span></div>

        </Col>
      </Row>
    </div>
  );
};

// Decorate with redux-form
OrderForm = reduxForm({
  form: "OrderForm", // a unique identifier for this form
  validate,
})(OrderForm);

// Decorate with connect to read form values
const selector = formValueSelector("OrderForm"); // <-- same as form name
OrderForm = connect((state) => {
  // can select values individually
  // or together as a group
  const { search, country } = selector(state, "search", "lastName");
  return {
    search: search,
    country: country,
  };
})(OrderForm);

export default OrderForm;

/*
export default reduxForm({
  form: "OrderForm", // a unique identifier for this form
  validate,
})(OrderForm);
*/
