import { Container, Row, Col} from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import {Link} from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Contact Us</h1>
            </Col>
          </Row>
          <Row>
            <Col className="contact-section">
              <div className="contact-desc">
                <h2>Get In Touch</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt corporis iste, illo natus consectetur quasi velit nostrum, similique minus consequuntur quod doloribus voluptatum adipisci maxime reprehenderit, fugit qui pariatur temporibus!</p>
                <div className="link">
                  <Link className="link-section text-decoration-none mb-3">
                    <i className="fa-brands fa-whatsapp"></i>
                    <div className="link-desc">
                      <h5>Phone Number</h5>
                      <p>+62 123-4567-8910</p>
                    </div>
                  </Link>
                  <Link className="link-section text-decoration-none mb-3">
                    <i className="fa-regular fa-envelope"></i>
                    <div className="link-desc">
                      <h5>E-mail</h5>
                      <p>evoquest@gmail.com</p>
                    </div>
                  </Link>
                  <Link className="link-section text-decoration-none mb-4">
                  <i className="fa-solid fa-location-dot"></i>
                    <div className="link-desc">
                      <h5>Address</h5>
                      <p>Universitas Kristen Maranatha. Jl. Prof. drg. Surya Sumantri, M.P.H. No. 65, Bandung</p>
                    </div>
                  </Link>
                </div>
                <hr />
                <div className="social-section">
                  <h3>Follow Us :</h3>
                  <div className="social mt-3">
                    <i className="fa-brands fa-discord"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                </div>
              </div>
              <div className="contact-form shadow-lg">
                <h2 className="mb-4">Send A Message</h2>
                <div className="field-form">
                  <div>
                    <p className="mb-0">Name</p>
                    <input type="text" />
                  </div>
                  <div>
                    <p className="mb-0">Email Address</p>
                    <input type="text" />
                  </div>
                  <div>
                    <p className="mb-0">Message</p>
                    <input type="text" />
                  </div>    
                </div>
                <div className="nonfield-form">
                  <p>*By submitting, you agree to the processing of your personal data </p>
                </div>
                <button className="btn btn-warning rounded-1">Submit</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  )
}

export default ContactPage