import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
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
                      user.photoURL ? (
                        <img
                          className='profile-img'
                          src={user.photoURL}
                          alt='user pic'
                        />
                      ) : (
                        <img
                          src='https://i.ibb.co/ZJPQfBr/115-1150152-default-profile-picture-avatar-png-green.jpg'
                          alt=''
                          className='profile-img'
                        />
                      )
                    }
                    id='basic-nav-dropdown'>
                    <div className='dashboard-box mx-auto'>
                      <div className='profile-info text-center'>
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt=''
                            className='profile-info-img'
                          />
                        ) : (
                          <img
                            src='https://i.ibb.co/ZJPQfBr/115-1150152-default-profile-picture-avatar-png-green.jpg'
                            alt=''
                            className='profile-info-img'
                          />
                        )}

                        <p className='regular-subtitle mt-2'>
                          {user.displayName}
                        </p>
                        <Link
                          to='/profile'
                          className='btn btn-success py-1 px-2 rounded-pill '>
                          <AccountCircleIcon /> View Profile
                        </Link>
                      </div>
                      <hr />
                      <div className='profile-info-body'>
                        <p>
                          <Link to='/' onClick={LogOut}>
                            <LogoutIcon /> Logout
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
