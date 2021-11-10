import { Alert, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Registration = () => {
  // import data from useAuth, useLocation and useHistory.
  const { signUpWithPassword, isLoading, error, user } = useAuth();
  const location = useLocation();
  const history = useHistory();

  //  Update the registration input field
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.email) {
      signUpWithPassword(
        data.name,
        data.email,
        data.password,
        location,
        history,
      );
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card border-0 shadow rounded-3 my-5'>
              <div className='card-body p-4 p-sm-5'>
                <h5 className='card-title text-center mb-5 fw-light fs-5'>
                  Create a new Account
                </h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    sx={{ m: 2, width: 1 }}
                    type='text'
                    {...register("name", { required: true })}
                    id='standard-basic'
                    label='Your Name'
                    variant='standard'
                  />
                  <TextField
                    sx={{ m: 2, width: 1 }}
                    type='email'
                    {...register("email", { required: true })}
                    id='standard-basic'
                    label='Email'
                    variant='standard'
                  />
                  <TextField
                    sx={{ m: 2, width: 1 }}
                    {...register("password", { required: true })}
                    id='standard-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                    variant='standard'
                  />

                  <div className='d-grid my-2'>
                    <Button
                      variant='contained'
                      type='submit'
                      sx={{ width: "50%", mx: "auto" }}>
                      REGISTRATION
                    </Button>
                    <hr className='my-4' />
                    <NavLink style={{ textDecoration: "none" }} to='/login'>
                      <Button variant='text'>
                        Already Registered? Please Login
                      </Button>
                    </NavLink>
                  </div>
                </form>
                {isLoading && <CircularProgress />}
                {user?.email && (
                  <Alert severity='success'>User Created successfully!</Alert>
                )}
                {error && <Alert severity='error'>{error}</Alert>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
