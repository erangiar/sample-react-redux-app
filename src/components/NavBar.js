import { toUpper } from "lodash";
import { Col, Row } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <Row className="sticky">
        <Col md={3} style={{ background: "black" }} className='p-4'>
          <Row>
            <Col md={2}>Buy</Col>
            <Col md={2}>Sell</Col>
            <Col md={3}>Invest</Col>
            <Col md={5}><img src='media/images/search@3x.png' alt='' width='15' style={{marginRight:'1rem'}}/><span>Search</span></Col>
          </Row>
        </Col>
        <Col md={4} style={{ background: "white", color: "black" }} className='p-2'>
        <Row>
            <Col md={4} className='triangle'></Col>
            <Col md={4} className='title' style={{borderLeft:'solid 1px black',transform:'skew(-20deg)'}}><div style={{transform:'skew(20deg)',marginLeft:'-1.5rem'}}>Shoping</div></Col>
            
          </Row>
        </Col>
        <Col md={5} style={{ background: "white", color: "black" }} className='p-4'>
          <Row>
            <Col md={3}>How it works</Col>
            <Col md={4}>The Lymited Journal</Col>
            <Col md={3}>Register</Col>
            <Col md={1}><img src='media/images/profile@3x.png' alt='' width='15'></img>
</Col>
            <Col md={1}><img src='media/images/basket@3x@2x.png' alt='' width='20'></img></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
