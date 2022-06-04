import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import TextField from "@mui/material/TextField";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import Checkbox from "@mui/material/Checkbox";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
//import asyncValidate from './asyncValidate';
import validate from "../util/validations";
import renderTextField from "./form-elements/renderTextField";
import { FormControlLabel } from "@mui/material";
import renderCheckbox from "./form-elements/renderCheckbox";
import RenderSelectField from "./form-elements/renderSelectField";
import Heading from "./Heading";
import { Row, Col } from "react-bootstrap";
import RenderSearchField from "./form-elements/renderSearchField";
import { useSelector, useDispatch, connect } from "react-redux";
import { populateForm, setAddressDetails } from "../actions/addressActions";
import MainTitle from "./MainTitle";
import { setOrder, viewOrderDetails } from "../actions/orderActions";
import Error from "@mui/icons-material/Error";
import {
  submitAddress,
  submitPrefferences,
  submitUserDetails,
} from "../api/orderApi.js.js";
import { setOrderDetails } from "../reducers/orderReducer";

let OrderForm = ({ search, setLoader, setError, setContext }) => {
  //const { search } = props;
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form);
  const [isSubmitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (search) {
      setAddressDetails(dispatch, search);
    }

  }, [dispatch, search]);

  async function submitOrder(order) {
    let code = false;
    setSubmitted(true);
    if (!forms.OrderForm.syncErrors) {
      setOrder(dispatch, forms.OrderForm.values);
      setLoader(true);

      await submitUserDetails('fail')
        .then((res) => {
          code = res.code;
          console.log(res);
        })
        .catch((e) => {
          setLoader(false);
          setError("There appears to be a problem with the system");

        });
    }

    if (code === 200) {
      await submitAddress()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          setLoader(false);
          setError("There appears to be a problem with the system");

        });
      await submitPrefferences()
        .then((res) => {
          console.log(res);
          setLoader(false);
          setContext("order_summary");
        })
        .catch((e) => {
          setLoader(false);
          setError("There appears to be a problem with the system");

        });
    } else {
      setLoader(false);
      setContext("error");
      setError("There appears to be a problem with the system");

    }
  }

  const renderError = (input) => {
    if (
      isSubmitted &&
      forms.OrderForm.syncErrors &&
      forms.OrderForm.syncErrors[input]
    ) {
      return (
        <div>
          <span className="error">
            <Error style={{ height: "1rem" }} />
          </span>
          <span className="error">{forms.OrderForm.syncErrors[input]}</span>
        </div>
      );
    }
  };

  return (
    <div>
      <MainTitle
        title={"Order Details"}
        desc={"Ready to join the world’s most ambitious luxury marketplace?"}
      />

      <form className="main-div">
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
                required={true}
              />
              {renderError("firstName")}
            </div>
          </Col>
          <Col md={6}>
            <div>
              <Field
                className="w-100"
                name="lastName"
                component={renderTextField}
                label="Last Name"
                required={true}
              />
              {renderError("lastName")}
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
                required={true}
              />
              {renderError("email")}
            </div>
          </Col>
          <Col md={6}>
            <div>
              <Field
                className="w-100"
                name="mobileNumber"
                component={renderTextField}
                label="Mobile Number"
                required={true}
              />
              {renderError("mobileNumber")}
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
                required={true}
              ></Field>
              {renderError("country")}
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
                required={true}
              />
              {renderError("address1")}
            </div>
          </Col>
          <Col md={6}>
            <div>
              <Field
                className="w-100"
                name="address2"
                component={renderTextField}
                label="Address Line 2"
                required={true}
              />
              {renderError("address2")}
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
                required={true}
              />
              {renderError("city")}
            </div>
          </Col>
          <Col md={6}>
            <div>
              <Field
                className="w-100"
                name="state"
                component={renderTextField}
                label="County/Province/State"
                required={true}
              />
              {renderError("state")}
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
                required={true}
              />
              {renderError("postalCode")}
            </div>
          </Col>
        </Row>

        <div className="mb-5">
          <Heading title={"Preferrences"} />
        </div>
      </form>
      <Row style={{ padding: "0rem 0rem 0rem 18rem" }}>
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
              <Field
                name="watches"
                component={renderCheckbox}
                label="Watches"
              />
            </Col>
            <Col md={3}>
              <Field
                name="laptops"
                component={renderCheckbox}
                label="Laptops"
              />
            </Col>
          </Row>
        </Col>
        <Col md={5} className="line" style={{ paddingLeft: "3rem" }}>
          <button
            className="custom-button mt-3 mx-3"
            onClick={() => submitOrder(forms.OrderForm.values)}
            type="submit"
          >
            Save
          </button>
        </Col>
      </Row>
    </div>
  );
};

OrderForm = reduxForm({
  form: "OrderForm",
  validate,
})(OrderForm);

const selector = formValueSelector("OrderForm");
OrderForm = connect((state) => {
  const search = selector(state, "search");
  return {
    search: search,
  };
})(OrderForm);

export default OrderForm;
