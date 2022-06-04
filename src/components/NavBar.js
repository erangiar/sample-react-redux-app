import { Col, Row } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <Row className="sticky">
        <Col md={2} style={{ background: "black" }} className="p-4">
          <Row>
            <Col md={4}>Buy</Col>
            <Col md={4}>Sell</Col>
            <Col md={4}>Invest</Col>
          </Row>
        </Col>
        <Col md={1} style={{ background: "black", padding: "1.5rem 0rem" }}>
          <img
            src="media/images/search@3x.png"
            alt=""
            width="15"
            style={{ marginRight: "1rem" }}
          />
          <span>Search</span>
        </Col>

        <Col
          md={4}
          style={{ background: "white", color: "black" }}
          className="p-2"
        >
          <Row>
            <Col md={6}></Col>
            <Col
              md={4}
              className="title"
              style={{
                borderLeft: "solid 1px black",
                transform: "skew(-20deg)",
              }}
            >
              <div style={{ transform: "skew(20deg)", marginLeft: "-1.5rem" }}>
                Shoping
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          md={5}
          style={{ background: "white", color: "black" }}
          className="p-4"
        >
          <div style={{ textAlign: "right" }}>
            <span className="p-2">How it works</span>
            <span className="p-2">The Lymited Journal</span>
            <span className="p-2">Register</span>
            <span className="p-2">
              <img src="media/images/profile@3x.png" alt="" width="15"></img>
            </span>
            <span className="p-2">
              <img src="media/images/basket@3x@2x.png" alt="" width="20"></img>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
