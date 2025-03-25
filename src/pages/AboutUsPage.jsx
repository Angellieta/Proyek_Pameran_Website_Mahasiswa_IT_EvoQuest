import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { slider } from "../data/index";

import CreativityImage from "../assets/img/creativity.png";
import CommunityImage from "../assets/img/community.png";
import ExplorationImage from "../assets/img/exploration.png";

import { useState } from 'react';

const AboutUsPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="about-page min-vh-100">
      <Container className="d-flex flex-column justify-content-center">
        <Row>
          <Col>
            <h1 className="fw-bold text-center">About Us</h1>
          </Col>
        </Row>
        <Row className="carousel">
          <Col>
            <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
              {slider.map((sliderabout) => (
                <Carousel.Item key={sliderabout.id}>
                  <div className="carousel-wrapper">
                    <img
                      className="carousel-image"
                      src={sliderabout.imgslider}
                      alt={sliderabout.alttext}
                    />
                    <div className="carousel-gradient"></div>
                    <Carousel.Caption>
                      <h3 className="fw-bold">{sliderabout.title}</h3>
                      <p className="carousel-desc">{sliderabout.desc}</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="info d-flex justify-content-center">
            <Col className="section-info">
              <div>
                <div className="section-space d-flex justify-content-center"><i className="fa-solid fa-star"></i></div>
                <div>
                  <h5>100+</h5>
                  <p>A Website Creation By Students</p>
                </div> 
              </div>
              <div>
                <div className="section-space d-flex justify-content-center"><i className="fa-solid fa-person"></i></div>
                <div>
                  <h5>86</h5>
                  <p>The Student Who Join</p>
                </div>
              </div>
            </Col>
        </Row>
        <Row>
          <Col className="about-section">
            <div>
              <p className="about-desc">
                EvoQuest reflects a journey of creativity and achievement in web development, as well as aspirations for continued growth. This platform presents the creativity of Maranatha Christian University IT students in a dynamic and inspiring digital platform. EvoQuest is not only about showcasing a website created by students, but also about opening the door for students to explore and showcase their potential in the world of web development.
              </p>
            </div>
            <div className="img-about">
              <img src={CreativityImage} alt="img-creativity" />
              <p>Showcasing the creativity of Maranatha Christian University IT students in a dynamic and inspiring digital platform.</p>
            </div>
            <div className="img-about">
              <p>Students can innovate, interact, and build a solid community with students from other universities by joining the Discord community.</p>
              <img src={CommunityImage} alt="img-community" />
            </div>
            <div className="img-about">
              <img src={ExplorationImage} alt="img-explore" />
              <p>Opening opportunities for everyone to explore and develop potential in web development.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUsPage;
