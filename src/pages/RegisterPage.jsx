import{Container, Row, Col} from "react-bootstrap";
import ImageRegister from "../assets/img/register.gif";

import {useNavigate} from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
    let navigate = useNavigate();

    const [nrp, setNrp] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [classNum, setClassNum] = useState("");
    const [nrpError, setNrpError] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [classError, setClassError] = useState("");

    const handleRegister = () => {
        let valid = true;

        // Regex dan validasi input
        const nrpRegex = /^\d{7}$/; // NRP harus terdiri dari 7 digit angka
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/; // Password harus mengandung huruf besar, kecil, dan angka
        const classRegex = /^\d{4}$/; 

        // Validasi NRP
        if (!nrpRegex.test(nrp)) {
            setNrpError("NRP must consist of 7 digits.");
            valid = false;
        } else {
            setNrpError("");
        }

        // Validasi Nama
        if (name.trim() === "") {
            setNameError("Name is required.");
            valid = false;
        } else {
            setNameError("");
        }

        // Validasi Password
        if (!passwordRegex.test(password)) {
            setPasswordError("Password must contain uppercase, lowercase letters, and numbers.");
            valid = false;
        } else {
            setPasswordError("");
        }

        // Validasi Class
        if (classNum.trim() === "") {
            setClassError("Class is required.");
            valid = false;
        } else {
            setClassError("");
        }

        // Validasi Class (4 digit angka)
        if (!classRegex.test(classNum)) {
            setClassError("Class must consist of 4 digits.");
            valid = false;
        } else {
            setClassError("");
        }

        // Jika valid, navigasi ke halaman login
        if (valid) {
            navigate("/login");
        }
    };
  return (
    <div className="register-page">
        <div className="register w-100 min-vh-100">
            <Container className="d-flex justify-content-center">
                <Row className="w-100">
                    <Col className="register-section shadow-lg">
                        <div className="image">
                            <img src={ImageRegister} alt="register-img" />
                        </div>
                            <div className="form">
                                <h2>Create Your Account</h2>
                                <div className="field">
                                <div>
                                        <p className="mb-0">NRP</p>
                                        <input 
                                            type="text" 
                                            value={nrp} 
                                            onChange={(e) => setNrp(e.target.value)} 
                                        />
                                        {nrpError && <p className="text-danger">{nrpError}</p>}
                                    </div>
                                    <div>
                                        <p className="mb-0">Name</p>
                                        <input 
                                            type="text" 
                                            value={name} 
                                            onChange={(e) => setName(e.target.value)} 
                                        />
                                        {nameError && <p className="text-danger">{nameError}</p>}
                                    </div>
                                    <div>
                                        <p className="mb-0">Password</p>
                                        <input 
                                            type="password" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                        />
                                        {passwordError && <p className="text-danger">{passwordError}</p>}
                                    </div>
                                    <div>
                                        <p className="mb-0">Class</p>
                                        <input 
                                            type="number" 
                                            value={classNum} 
                                            onChange={(e) => setClassNum(e.target.value)} 
                                        />
                                        {classError && <p className="text-danger">{classError}</p>}
                                    </div>
                                    <div>
                                        <p className="mb-0">Other Information</p>
                                        <input type="text" />
                                        {/* No validation for Other Information as it's optional */}
                                    </div> 
                                </div>
                                <div className="nonfield">
                                    <h5>Already have an account? Login Here</h5>
                                </div>
                                <div className="btn-section">
                                    <button className="btn btn-dark rounded-1" onClick={() => navigate ("/login")}>Login</button>
                                    <button className="btn btn-warning rounded-1" onClick={handleRegister}>Register</button>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default RegisterPage