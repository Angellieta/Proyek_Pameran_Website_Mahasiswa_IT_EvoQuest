import {Container, Row, Col, Accordion} from "react-bootstrap";

import {faq} from "../data/index";

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container className="d-flex align-items-center">
        <Row>
          <Col>
          <h2 className="text-left fw-bold">Frequently Asked Questions</h2>
          </Col>
        </Row>
        <Row className="row-accor row-cols-1 g-6 pt-5 ">
          {faq.map((data) =>{
            return(
              <Col key={data.id}>
                <Accordion className="shadow-sm rounded-2">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
      
    </div>

  )
}

export default FaqComponent;