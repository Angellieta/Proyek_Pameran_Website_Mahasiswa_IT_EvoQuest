import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5" className="pt-2">
            <img src="../src/assets/img/logo.png" alt="evoquest" width="30%"/>
            <p className="desc pt-2">EvoQuest presents the creativity of Maranatha Christian University IT students in a dynamic and inspiring digital platform and showcase their potential in the world of web development.</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
              <i className="fa-brands fa-whatsapp"></i>
              <p className="m-0">+62 123-4567-8910</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope">
                </i>
                <p className="m-0">evoquest@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold pt-2">Menu</h5>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="creation">Creation</Link>
            <Link to="contact">Contact</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3 pt-2">Subscribe for new information</h5>
          <div className="subscribe">
            <input type="text" placeholder="enter email..." className="inp-subs" />
            <button className="btn btn-warning rounded-1">Subscribe</button>
          </div>
          <div className="social mt-3">
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">EvoQuest Mastery</span>, All Right Reserved </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent