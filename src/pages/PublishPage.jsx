import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PublishPage = () => {
  let navigate = useNavigate();
  const [selfPictureName, setSelfPictureName] = useState("");
  const [webPictureName, setWebPictureName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkWebsite, setLinkWebsite] = useState("");
  const [linkVideo, setLinkVideo] = useState("");
  const [errors, setErrors] = useState({});

  const isValidURL = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // Protocol (http or https)
      "((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|localhost)" + // Domain name or localhost
      "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$", // Port and path
      "i"
    );
    return pattern.test(url);
  };
  

  const handleSelfPictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelfPictureName(file.name);
    }
  };

  const handleWebPictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width <= 600) {
          setWebPictureName(file.name);
          setErrors((prev) => ({ ...prev, webPicture: "" }));
        } else {
          setWebPictureName("");
          setErrors((prev) => ({ ...prev, webPicture: "Image width must be less than or equal to 600 pixels." }));
        }
      };
    }
  };

  const handleSubmit = () => {
    let formErrors = {};

    if (!title) formErrors.title = "Title is required.";
    if (!description) formErrors.description = "Description is required.";
    
    // Validate linkWebsite
    if (!linkWebsite) {
      formErrors.linkWebsite = "Link Website is required.";
    } else if (!isValidURL(linkWebsite)) {
      formErrors.linkWebsite = "Invalid URL for Website.";
    }
    
    // Validate linkVideo
    if (!linkVideo) {
      formErrors.linkVideo = "Link Video is required.";
    } else if (!isValidURL(linkVideo)) {
      formErrors.linkVideo = "Invalid URL for Video.";
    }

    if (!selfPictureName) formErrors.selfPicture = "Self Picture is required.";
    if (!webPictureName) formErrors.webPicture = "Web Picture is required and must meet size requirements.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      navigate('/creation');
    }
  };

  return (
    <div className="publish-page">
      <div className="publish w-100 min-vh-100">
        <Container className="d-flex justify-content-center">
          <Row className="w-75">
            <Col className="publish-section shadow-lg">
              <div className="form">
                <h2 className="text-right">Publish Your Website</h2>
                <div className="field">
                  <div>
                    <p className="mb-0">Title</p>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
                  </div>
                  <div>
                    <p className="mb-0">Description</p>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
                  </div>

                  <div>
                    <p className="mb-0">Self Picture</p>
                    <div className="custom-file-upload">
                      <label className="file-upload-btn">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleSelfPictureChange}
                          style={{ display: "none" }}
                        />
                        Browse
                      </label>
                      {selfPictureName && (
                        <input
                          type="text"
                          value={selfPictureName}
                          readOnly
                          className="file-name-display"
                        />
                      )}
                    </div>
                    {errors.selfPicture && <p style={{ color: "red" }}>{errors.selfPicture}</p>}
                  </div>

                  <div>
                    <p className="mb-0">Web Picture (Image width must be less than or equal to 600 pixels)</p>
                    <div className="custom-file-upload">
                      <label className="file-upload-btn">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleWebPictureChange}
                          style={{ display: "none" }}
                        />
                        Browse
                      </label>
                      {webPictureName && (
                        <input
                          type="text"
                          value={webPictureName}
                          readOnly
                          className="file-name-display"
                        />
                      )}
                    </div>
                    {errors.webPicture && <p style={{ color: "red" }}>{errors.webPicture}</p>}
                  </div>

                  <div>
                    <p className="mb-0">Link Website</p>
                    <input
                      type="text"
                      value={linkWebsite}
                      onChange={(e) => setLinkWebsite(e.target.value)}
                    />
                    {errors.linkWebsite && <p style={{ color: "red" }}>{errors.linkWebsite}</p>}
                  </div>

                  <div>
                    <p className="mb-0">Link Video</p>
                    <input
                      type="text"
                      value={linkVideo}
                      onChange={(e) => setLinkVideo(e.target.value)}
                    />
                    {errors.linkVideo && <p style={{ color: "red" }}>{errors.linkVideo}</p>}
                  </div>

                  <div className="btn-section">
                    <button
                      className="btn btn-dark rounded-1"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PublishPage;
