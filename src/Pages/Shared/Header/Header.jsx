import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import "./Header.css";

const Header = () => {
  // import user and logout from useAuth
  const { user, LogOut } = useAuth();
  return (
    <div className='header sticky-top shadow-lg'>
      <Navbar className='' collapseOnSelect expand='lg' variant='light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              className='logo'
              src='https://i.ibb.co/f881qkN/logo.png'
              alt=''
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='bg-navbar' id='responsive-navbar-nav'>
            <Nav className='mx-auto nav-bar'>
              <Nav.Link as={Link} to='/products'>
                EXPLORE PRODUCTS
              </Nav.Link>
              <Nav.Link as={Link} to='/destination'>
                DESTINATION
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                CONTACT US
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                ABOUT US
              </Nav.Link>

              {/* user login manage menu here */}
              {!user.email ? (
                <Nav.Link as={Link} to='/login'>
                  <Button className='btn btn-success'>Sign in</Button>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to='/dashboard'>
                    DASHBOARD
                  </Nav.Link>
                  <NavDropdown
                    eventKey={1}
                    title={
                      <img
                        className='profile-img'
                        src={user.photoURL}
                        alt='user pic'
                        onError={(e) => {
                          e.target.onerror = false;
                          e.target.src =
                            "https://www.linkpicture.com/q/download_86.png";
                        }}
                      />
                    }
                    id='basic-nav-dropdown'>
                    <div className='dashboard-box mx-auto'>
                      <div className='profile-info text-center'>
                        <img
                          src={user.photoURL}
                          alt=''
                          className='profile-info-img'
                          onError={(e) => {
                            e.target.onerror = false;
                            e.target.src =
                              "https://www.linkpicture.com/q/download_86.png";
                          }}
                        />

                        <p className='regular-subtitle mt-2'>
                          {user.displayName}
                        </p>
                        <Link
                          to='/profile'
                          className='btn btn-success py-1 px-2 rounded-pill '>
                          <i className='far fa-user-circle'></i> View Profile
                        </Link>
                      </div>
                      <hr />
                      <div className='profile-info-body'>
                        <p>
                          <Link to='/mybooking'>
                            <i className='fas hico fa-bookmark'></i> My Booking
                          </Link>
                        </p>
                        <p>
                          <Link to='/allbooking'>
                            <i className='fas hico fa-bookmark'></i> Manage All
                            Booking
                          </Link>
                        </p>
                        <p>
                          <Link to='/addpackage'>
                            <i className='fas hico fa-bookmark'></i> Add New
                            Package
                          </Link>
                        </p>
                        <p>
                          <Link to='/' onClick={LogOut}>
                            <i className='fas hico fa-sign-out-alt'></i> Logout
                          </Link>
                        </p>
                      </div>
                    </div>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
