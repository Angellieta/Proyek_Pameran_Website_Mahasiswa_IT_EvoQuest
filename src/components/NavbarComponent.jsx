import {useState, useEffect} from "react";
import{Navbar, Nav, Container} from "react-bootstrap"
import {useNavigate} from "react-router-dom";

import {navLinks} from "../data/index";
import {NavLink} from "react-router-dom";

const NavbarComponent = () => {
    const [colorChange, setColorChange] = useState (false);
    let navigate = useNavigate();

    const colorChangeBackground = () => {
        if (window.scrollY > 10){
            setColorChange(true);
        }else {
            setColorChange(false);
        }
    };

    useEffect(() => {
        colorChangeBackground();

        window, addEventListener("scroll", colorChangeBackground);
    });

    return (
        <div>
            <Navbar expand="lg" className={colorChange ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand><img src="../src/assets/img/logo.png" alt="evoquest" width="60%"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                        {navLinks.map((link) => {
                                    return (
                                        <div className="nav-link" key={link.id}>
                                            <NavLink to={link.path} className={({ isActive, isPending }) =>
                                            (isPending ? "pending" : isActive ? "active" : "")} end>{link.text}</NavLink>
                                        </div>
                                    );
                                    }
                                )}
                        </Nav>
                        <div className="text-center">
                            <button className="btn btn-outline-dark rounded-1" onClick={() => navigate ("/login")} >Publish Your Web</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
    )
}

export default NavbarComponent