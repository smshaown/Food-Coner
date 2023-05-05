import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
// import logo from "../../assets/logo-white.png";
import "./Header.css";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../assets/download.jpg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
    console.log("ok");
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-color shadow-md">
      <Container>
        <Navbar.Brand href="#">
          <img
            className="img-fluid"
            style={{ width: "50px", hight: "50px" }}
            src={logo}
            alt=""
          />
         <Link to="/"><span className="logoText">SM FOODCONER</span></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="mx-auto">
          <NavLink  to="/"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "activeNav"
                        : isPending
                        ? "pending"
                        : ""
                    } activeClassName="activeNav">
            Home
          </NavLink>

          <NavLink to="/blog" className={({ isActive, isPending }) =>
                      isActive
                        ? "activeNav"
                        : isPending
                        ? "pending"
                        : ""
                    } activeClassName="activeNav" >
            Blog
          </NavLink>
        </Nav>
          <Nav>
            {user ? (
              <img
                title={user?.displayName}
                src={user?.photoURL}
                style={{
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                className="rounded-circle"
                alt={user?.displayName}
              />
            ) : (
              <Button className="ml-3 btn btn-danger">
                <Link to="/login">Log In</Link>
              </Button>
            )}

            {user && (
              <span className="text-black">
                <button
                  onClick={handleLogOut}
                  className="btn btn-danger"
                  style={{ marginTop: "6px" }}
                >
                  Log Out
                </button>
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
