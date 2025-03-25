import{Container, Row, Col} from "react-bootstrap";

import HomeImage from "../assets/img/success.png";
import AboutImage from "../assets/img/exhibition.jpeg";
import CreativityImage from "../assets/img/creativity.png";
import CommunityImage from "../assets/img/community.png";
import ExplorationImage from "../assets/img/exploration.png";

import {NewCreation, Event} from "../data/index";
import {useNavigate} from "react-router-dom";
import FaqComponent from "../components/FaqComponent";
import RatingReview from '../components/RatingReview';
import {useState} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const HomePage = () => {
    let navigate = useNavigate();

    const [ratings, setRatings] = useState({});

    const handleRatingChange = (creationId, rating) => {
      setRatings(prevRatings => ({
        ...prevRatings,
        [creationId]: rating
        }));
      };

  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
            <Row className="header-box d-flex align-items-center pt-lq-5">
                <Col className="text-center" lg="6">
                <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Dont Be The Same</h1>
                <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Out Your Comfort Zone</p>
                <button className="btn btn-warning btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate ("/creation")}>Explore Now</button>
                </Col>
                <Col lg="6" className="pt-lg-0 pt-5 text-center">
                <img src={HomeImage} alt="home-img" className="animate__animated animate__fadeInUp" />
                </Col>
            </Row>
        </Container>
        </header>
        
        <div className="about min-vh-100 about w-100 d-flex pl-3">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-left fw-bold">ABOUT US</h1>
                    <p>EvoQuest reflects a journey of creativity and achievement in web development, as well as aspirations for continued growth. This platform presents the creativity of Maranatha Christian University IT students in a dynamic and inspiring digital platform. EvoQuest is not only about showcasing a website created by students, but also about opening the door for students to explore and showcase their potential in the world of web development. Through this platform, students can innovate, interact, and also build communities with other students with different university in discord provided.</p>
                    <button className="btn btn-warning btn-lg rounded-1 me-2 mb-xs-0 mb-2"onClick={() => navigate ("/aboutus")}>See more &gt;</button>
                    </Col>
                    <Col lg="6" className="imgabout d-flex align-item-center justify-contect-flex-end pt-lg-0 pt-5">
                    <img src={AboutImage} alt="about-img" />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="why min-vh-100 why w-100 d-flex pl-3">
            <Container>
                <Row> 
                    <Col>
                    <h1 className="text-center fw-bold">🐸&nbsp;&nbsp;&nbsp;WHY YOU SHOULD JOIN ?&nbsp;&nbsp;🐸</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    <div className="col d-flex justify-content-center">
                        <div className="card h-100">
                            <img src={CreativityImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Creativity</h5>
                                <p className="card-text">Showcasing the creativity of Maranatha Christian University IT students in a dynamic and inspiring digital platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="card h-100">
                            <img src={CommunityImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Community</h5>
                                <p className="card-text">Students can innovate, interact and build a solid community with students from other universities by join to discord community.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="card h-100">
                            <img src={ExplorationImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Exploration</h5>
                                <p className="card-text">Opening opportunities for everyone to explore and develop potential in web development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Row>
            </Container>
        </div>
        <div className="creation min-vh-100 w-100">
            <Container>
                <Row>
                    <Col>
                    <h1 className="fw-bold">New Creation </h1>
                    <p className="desc">&nbsp;New website creation from student <b>Teknik Informatika</b></p>
                    </Col>
                </Row>
                <Row>
                    {NewCreation.map((creation) => {
                        return(
                            <Col key={creation.id}className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={creation.delay}>
                                <img src={creation.image} alt="creation-photo-web" className="w-100 mb-4 rounded-top" />
                                <h5 className="mb-2 px-4">{creation.title}</h5>
                                <p className="px-4">{creation.desc}</p>
                                <div className="ket d-flex flex-column justify-content-between align-item-center px-4 pb-3">
                                    <p className="m-0 text-primary font-weight-bold">Karya : {creation.createby}</p>
                                    <p>NRP : {creation.nrp}</p>
                                    <div className="star mb-2">
                                      <RatingReview 
                                        creationId={creation.id}
                                        onRate={handleRatingChange}
                                      />
                                    </div>
                                    <p className="rating">Rating: {ratings[creation.id] || 'Not rated yet'}</p>
                                    <button className="btn btn-warning rounded-1" onClick={() => navigate (`/creation/${creation.id}`)}>{creation.seemore}</button>
                                </div> 
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col className="all-creation text-center" data-aos="fade-up" data-aos-duration="1000" >
                    <button className="btn btn-success rounded-6 btn-lg" onClick={() => navigate ("/creation")}>See All Creation <i className="fa-solid fa-chevron-right ms-1"></i></button>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="exhibition py-5">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center fw-bold my-5">EXHIBITION & EVENTS</h1>
                    </Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {Event.map((data) => {
                            return <SwiperSlide key={data.id} className="shadow-sm"> 
                                <h3 className="mb-4">Event EvoQuest</h3>
                                <div className="event">
                                    <img src={data.image} alt="" />
                                    <p className="desc">{data.desc}</p>
                                    <div>
                                        <h5 className="mb-1">Diadakan : {data.datetime}</h5>
                                        <p className="loc mb-3"> Lokasi : {data.location}</p>
                                        <button className="btn btn-warning rounded-1">Daftar</button>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>;
                        })}
                    </Swiper>
                </Row>
            </Container>
        </div>

        {/* FAQ */}
        <FaqComponent/>
    </div>
  );
};

export default HomePage