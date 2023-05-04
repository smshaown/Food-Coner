import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo-white.png";
import "./Header.css";
import { AuthContext } from "../../provider/AuthProvider";
import logo from '../../assets/download.jpg'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
    console.log("ok");
  };

  return (
  //   <Navbar collapseOnSelect expand="lg" className="navbar-color shadow-md" variant="dark">
  //   <Container>
  //     <Navbar.Brand href="#home">
  //       <img className="img-fluid" style={{width: "50px", hight: "50px"}} src={logo} alt="" />
  //       <span className="logoText">SM FOODCONER</span>
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <Nav className="mx-auto">
  //         <Link className="activeNav nav" activeClassName="activeNav" to="/">
  //           Home
  //         </Link>
  //         <Link activeClassName="activeNav" to="/about">
  //           About
  //         </Link>
  //         <Link activeClassName="activeNav" to="/blog">
  //         Blog
  //         </Link>
  //         <Link activeClassName="activeNav" to="/contact">
  //           Contact
  //         </Link>
  //       </Nav>
  //       <Nav>
  //         {user ? (
  //           <img
  //             title={user?.displayName}
  //             src={user?.photoURL}
  //             style={{width: "50px", height: "50px", cursor: "pointer", marginRight: '10px'}} className="rounded-circle"
  //             alt={user?.displayName}
             
  //           />
            
  //         ) : (
           
  //           <Button className="ml-3 button-info" to='/'>Log In</Button>
  //         )}

         

  //         {user && (
  //           <span className="text-black">
  //             <button onClick={handleLogOut} className="btn btn-danger" style={{marginTop: "6px"}}>Log Out</button>
  //           </span>
  //         )}
  //       </Nav>
  //      
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  <Navbar bg="light" expand="lg" className="navbar-color shadow-md">
  <Container>
    <Navbar.Brand href="#"><img className="img-fluid" style={{width: "50px", hight: "50px"}} src={logo} alt="" />
   <span className="logoText">SM FOODCONER</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav className="mx-auto">
          <Link className="activeNav nav" activeClassName="activeNav" to="/">
             Home
           </Link>
           <Link activeClassName="activeNav" to="/about">
             About
          </Link>
           <Link activeClassName="activeNav" to="/blog">
           Blog
           </Link>
         <Link activeClassName="activeNav" to="/contact">
             Contact
           </Link>
         </Nav>
         <Nav>
          {user ? (
            <img
              title={user?.displayName}
              src={user?.photoURL}
              style={{width: "50px", height: "50px", cursor: "pointer", marginRight: '10px'}} className="rounded-circle"
              alt={user?.displayName}
             
            />
            
          ) : (
           
            <Button className="ml-3 button-info"><Link  to='/login'>Log In</Link></Button>
          )}

         

          {user && (
            <span className="text-black">
              <button onClick={handleLogOut} className="btn btn-danger" style={{marginTop: "6px"}  }>Log Out</button>
            </span>
          )}
        </Nav>
       
      </Navbar.Collapse>
     
    
  </Container>
</Navbar>
  
  );
};

export default Header;
