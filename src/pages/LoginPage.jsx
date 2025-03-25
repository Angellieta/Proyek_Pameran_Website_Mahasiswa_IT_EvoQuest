import { Container, Row, Col} from "react-bootstrap";
import ImageLogin from "../assets/img/login.gif";

import {useNavigate} from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
    let navigate = useNavigate();
    const [nrp, setNrp] = useState("");
    const [password, setPassword] = useState("");
    const [nrpError, setNrpError] = useState(""); // State untuk pesan error NRP
    const [passwordError, setPasswordError] = useState(""); // State untuk pesan error Password

    const handleLogin = () => {
        const nrpRegex = /^\d{7}$/; // NRP harus terdiri dari 7 digit angka
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/; // Password harus mengandung huruf besar, kecil, dan angka

        let valid = true; // Flag untuk validasi keseluruhan

        // Validasi NRP
        if (!nrpRegex.test(nrp)) {
        setNrpError("NRP must consist of 7 digits");
        valid = false;
        } else {
        setNrpError(""); // Kosongkan pesan error jika valid
        }

        // Validasi Password
        if (!passwordRegex.test(password)) {
        setPasswordError("The password must contain uppercase letters, lowercase letters and numbers.");
        valid = false;
        } else {
        setPasswordError(""); // Kosongkan pesan error jika valid
        }

        // Jika semua input valid, lakukan navigasi
        if (valid) {
        navigate("/publish"); // Arahkan ke halaman home
        }
    };

  return (
    <div className="login-page">
        <div className="login w-100 min-vh-100">
            <Container className="d-flex justify-content-center">
                <Row className="w-75">
                    <div>
                        <Col className="login-section shadow-lg">
                            <div className="image">
                                <img src={ImageLogin} alt="login-img" />
                            </div>
                            <div className="form">
                                <h2 className="mb-2">Hello</h2>
                                <p>Let’s Login to publish your work</p>
                                <div className="field">
                                    <div>
                                        <p className="mb-0">NRP</p>
                                        <input type="text" value={nrp} onChange={(e) => setNrp(e.target.value)} />
                                        {nrpError && <p className="nrp-error text-danger">{nrpError}</p>}
                                    </div>
                                    <div>
                                        <p className="mb-0">Password</p>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        {passwordError && <p className="pass-error text-danger">{passwordError}</p>}
                                    </div>   
                                </div>
                                <div className="nonfield">
                                    <h5>New User? Register Here</h5>
                                </div>
                                <div className="btn-section">
                                    
                                    <button className="btn btn-dark rounded-1" onClick={() => navigate ("/register")}>Register</button>
                                    <button className="btn btn-danger rounded-1" onClick={() => navigate ("/admin")}>Admin</button>
                                    <button className="btn btn-warning rounded-1" onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default LoginPage