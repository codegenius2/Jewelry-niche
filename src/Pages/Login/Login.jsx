import { Alert, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  // import data from useAuth, useLocation and useHistory.
  const {
    loginWithEmailPassword,
    SignInWithGoogle,
    isLoading,
    error,
    user } = useAuth();
  const location = useLocation();
  const history = useHistory();

  // handle Google Login Function
  const handleGoogleLogin = () => {
    SignInWithGoogle(location, history);
  };

  // Update email and password fields
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.email) {
      loginWithEmailPassword(data.email, data.password, location, history);
    }
  };

  // return jsx here
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card border-0 shadow rounded-3 my-5'>
              <div className='card-body p-4 p-sm-5'>
                <h5 className='card-title text-center mb-5 fw-light fs-5'>
                  Sign In With Your Account
                </h5>
                <img
                  src='https://i.ibb.co/k2W6gGS/3647093.jpg'
                  className='img-fluid'
                  alt=''
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    {...register("email", { required: true })}
                    sx={{ m: 2, width: 1 }}
                    type='email'
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
                      type='submit'
                      variant='contained'
                      sx={{ width: "50%", mx: "auto" }}>
                      LOGIN
                    </Button>
                    <br className='my-3' />
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to='/registration'>
                      <Button variant='text'>
                        Haven't Account? Please Registration
                      </Button>
                    </NavLink>
                    <hr className='my-4' />
                    <Button
                      onClick={handleGoogleLogin}
                      variant='contained'
                      color='warning'>
                      {isLoading ? <CircularProgress size={20} /> : <><i className='fab fa-google me-2'></i> "Sign in with Google"</>}
                    </Button>
                  </div>
                </form>
                {user?.email && (
                  <Alert severity='success'>User Login successfully!</Alert>
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

export default Login;
