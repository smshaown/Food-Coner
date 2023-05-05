import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from "react-bootstrap";

const Login = () => {
  const [error, setError] = useState("");

  const { singIn, googleSing, gitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
       
        navigate(from, { replace: true });

        const successMessage = "You have successfully logged in!";
        toast.success(successMessage);
         form.reset()
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          const errorMessage = "Invalid email or password. Please try again.";
          setError(errorMessage);
          toast.error(errorMessage);
        }
      });
  };


  const handleGoogleSingIn = async () => {
    try {
      await googleSing();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleGitSingIn = () => {
    gitHub()
    .then(result => {
      const user = result.user;
      navigate(from, { replace: true });   
      console.log(user)   
    })
    .catch(error => {
      console.log(error)
    })
  }


  return (
    <div className="login-container py-5">
      <div className="container">
        <div className="login-form mx-auto shadow-lg p-3 ">
          <h1 className="text-center">Login</h1>

          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id=""
              placeholder="Type your Email"
              required
            />{" "}
            <br />
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id=""
              placeholder="Type your password"
              required
            />{" "}
            <br />
            <input
              className="form-control bg-info"
              type="submit"
              value="Login"
            />
          </form>
          <div className="text-center mb-3">
            <p className="pt-5 text-center">Or Login</p>
            <button
              onClick={handleGoogleSingIn}
              className="btn btn-outline-dark"
              style={{ marginRight: "10px" }}
            >
              {" "}
              <i class="fab fa-google"></i>
            </button>
            <button onClick={handleGitSingIn} className="btn btn-outline-dark">
              <i class="fab fa-github"></i>
            </button>
          </div>

          <Link className="login-account" to="/register">
            Create new Account. <span className="text-info fw-bold">Register</span>
          </Link>
        </div>

        {/* <p className="text-danger text-center mt-4">{error}</p> */}
        {error && <div id="error-message">{error}</div>}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
