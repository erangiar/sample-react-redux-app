import { Col, Row } from "react-bootstrap";

export default function MainTitle(props) {
  return (
    <Row style={{marginTop:'-4rem'}}>
        
      <Col md={6} className="p-0">
        <div className="mb-5 p-4 white-div">
        <div style={{paddingLeft:'19rem'}}> 
        <div className="title">{props.title}</div>
          <div className="desc">{props.desc}</div>
         </div>
         
        </div>
      </Col>
      <Col md={1} className="p-0">
        <div id="triangle"></div>
      </Col>
    
    </Row>
  );
}
