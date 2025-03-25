import { Container, Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { AllCreation } from "../data/index";

import {useState} from 'react';

import RatingReview from '../components/RatingReview';


const CreationPageView = () => {
    const { id } = useParams();
    const numericId = parseInt(id, 10); // Konversi id menjadi angka
    const creationview = AllCreation.find(item => item.id === numericId);
    const [ratings, setRatings] = useState({});

    const handleRatingChange = (creationId, rating) => {
      setRatings(prevRatings => ({
        ...prevRatings,
        [creationId]: rating
        }));
      };

    if (!creationview) {
      return <p>Creation not found.</p>;
    }
  
    return (
      <div className="creation-view min-vh-100">
        <Container>
          <Row>
            <div className=" view-photo d-flex flex-row flex-sm-wrap justify-content-center mx-4">
              <Col sm={8}className=" web px-4">
              <img
                    src={creationview.image}
                    alt="img-creation"
                    className=" mb-2 rounded-2"
              />
              </Col>
              <Col sm={4} className=" people px-4">
              <img
                    src={creationview.imgpeople}
                    alt="img-people"
                    className="mb-2 rounded-2"
              />
              </Col>
            </div>
          </Row>
          <Row>
            <Col className="mx-4">
              <div className="d-flex flex-column align-content-center px-4">
                  <h1 className="fw-bold mb-4">{creationview.title}</h1>
                  <p className="nrp text-right fw-bold mb-0">NRP : {creationview.nrp}</p>
                  <p className="name fw-bold mb-0">Name : {creationview.createby}</p>
                  <p className="nrp">{creationview.desc}</p>
              </div>
              <div className="mb-0 px-4">
                  <p className="mb-0">Rate Me</p>
              </div>
              <div className="star mb-2 px-4 mb-4">
                  <RatingReview 
                    creationId={creationview.id}
                    onRate={handleRatingChange}
                  /><p className="rating">{ratings[creationview.id] || 'Not rated yet'}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mx-4">
              <div className="btn d-flex px-4">
                <button className="btn btn-dark rounded-1">View Website</button>
                <button className="btn btn-dark rounded-1">View Video</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  

export default CreationPageView;