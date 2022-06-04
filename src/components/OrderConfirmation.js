import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Heading from "./Heading";
import MainTitle from "./MainTitle";

export default function OrderConfirmation() {
  const orderDetails = useSelector((state) => state.order);
  return (
    <div>
      <MainTitle
        title={"Order Placed"}
        desc={"Here's the summary of your order"}
      />
      <form className="main-div">
        <Row className="mb-2">
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"First Name"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.firstName : ""}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"Last Name"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.lastName : ""}
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"Email"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.email : ""}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"Mobile Number"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.mobileNumber : ""}
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"Country"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.country : ""}
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"Address Line 1"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.address1 : ""}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"Address Line 2"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.address2 : ""}
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"City"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.city : ""}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"State"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.state : ""}
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"Postal Code"} />
            </div>
            <div className="light-text">
              {orderDetails ? orderDetails.postalCode : ""}
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <div className="mb-3">
              <Heading title={"News letters prefferences"} />
            </div>

            <Row className="mb-2">
              {orderDetails.preferences.map((p) => {
                return <Col className="light-text mb-1">{p}</Col>;
              })}
              {orderDetails.preferences.length===0&&(
                 <Col className="light-text mb-1">None</Col>
              )}
            </Row>
          </Col>
        </Row>
      </form>
    </div>
  );
}
