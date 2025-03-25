import {Container, Row, Col} from "react-bootstrap";
import {AllCreation} from "../data/index";
import {useNavigate} from "react-router-dom";

import RatingReview from '../components/RatingReview';

import {useState} from 'react';


const CreationPage = () => {
  let navigate = useNavigate();
  const [category, setCategory] = useState(AllCreation);
  const [activeButton, setActiveButton] = useState(null); 
  const [searchTerm, setSearchTerm] = useState('');
  const [ratings, setRatings] = useState({});

    const handleRatingChange = (creationId, rating) => {
      setRatings(prevRatings => ({
        ...prevRatings,
        [creationId]: rating
        }));
      };

    const handleBtns = (e) => {
    let word=e.target.value;
    setActiveButton(word);
     
    if(word === "Show All"){
      setCategory(AllCreation)
    }
    else if(word === "2021") {
      const filtered = AllCreation.filter(item=>item.kind === "2021");
      setCategory(filtered)
    }
    else if(word === "2022") {
      const filtered = AllCreation.filter(item=>item.kind === "2022");
      setCategory(filtered)
    }
    else if(word === "2023") {
      const filtered = AllCreation.filter(item=>item.kind === "2023");
      setCategory(filtered)
    }
    else if(word === "2024") {
      const filtered = AllCreation.filter(item=>item.kind === "2024");
      setCategory(filtered)
    }};

    // Handle search input change
    const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value); 
    if (value === '') {
      setCategory(AllCreation); 
    } else {
      const filtered = AllCreation.filter(item => 
        item.nrp.toLowerCase().includes(value.toLowerCase()) // Filter by NRP
      );
      setCategory(filtered);
    }
    };

  return (
    <div className="creation-page">
      <div className="creation min-vh-100">
        <Container>
        <Row>
            <Col>
              <h1 className="fw-bold text-left mb-4">All Creation</h1>
            </Col>
          </Row>
          <Row>
            <div className="d-flex justify-content-between p-0">
            <div>
              <Col>
                <div className="filter d-flex ">
                  <button value="Show All" onClick={handleBtns} className={activeButton === "Show All" ? 'active' : ''}> Show All</button>
                  <button value="2021" onClick={handleBtns} className={activeButton === "2021" ? 'active' : ''}>2021</button>
                  <button value="2022" onClick={handleBtns} className={activeButton === "2022" ? 'active' : ''}>2022</button>
                  <button value="2023" onClick={handleBtns} className={activeButton === "2023" ? 'active' : ''}>2023</button>
                  <button value="2024" onClick={handleBtns} className={activeButton === "2024" ? 'active' : ''}>2024</button>
                </div>
              </Col>
            </div>
            <div>
              <Col>
                <input
                      type="text"
                      placeholder="Search by NRP"
                      value={searchTerm}
                      onChange={handleSearch}
                      className="form-control"
                  />
              </Col>
            </div>
            </div>
          </Row>
          <Row>
          {category.map((creation) => {
                        return(
                            <Col key={creation.id} md={6} className="shadow rounded mb-4">
                                <div className="image-wrapper">
                                <img src={creation.image} alt="creation-photo-web" className="w-100 mb-4 rounded-top" />
                                </div> 
                                <h5 className="mb-2 px-3">{creation.title}</h5>
                                <p className="px-3 text-justify">{creation.desc}</p>
                                <div className="ket d-flex flex-column justify-content-between align-item-center px-3 pb-3">
                                    <p className="m-0 text-primary font-weight-bold">Karya : {creation.createby}</p>
                                    <p>NRP : {creation.nrp}</p>
                                    <br />
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
        </Container>
      </div>
    </div>
    
  )
}

export default CreationPage