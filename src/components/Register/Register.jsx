import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {


    const {user, createUser} = useContext(AuthContext);
    const [error, setError] = useState('')


     const navigate = useNavigate();
     const location = useLocation();
     console.log(location)

  const from = location.state?.from?.pathname || "/";



    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;
        
        // const confirm = form.confirm.value;
        console.log(email, password, name)

        setError('');
        if(!/(?=.{6,}$)/.test(password)) {
            setError('Password must be 6 characters or longer');
            return;
          } else if (!/(?=.*[a-z])/g.test(password)) {
            setError('Your password must contain at least one letter.');
            return;
          } else if (!/(?=.*[A-Z])/g.test(password)) {
            setError('Your password must contain at least one upper case');
            return;
          } else if (!/(?=.*\d)/g.test(password)) {
            setError('Your password must contain at least one digit');
            return;
          }

          createUser(email, password)
          .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUser(result.user, name, photo)
            navigate(from, { replace: true });
            form.reset();
          })
          .catch(error => {
            console.log(error)
          })

    }

    const updateUser = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {})
        .catch(error => {
            console.error(error)
        })
    }



    return (
        <div className="login-container py-5">
        <div className="container">
            <div className="login-form mx-auto shadow p-3">
                <h1 className="text-center">Register</h1>

                <form onSubmit={handleRegister}>

                <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" id="" placeholder="Type your name" required /> <br />

                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="" placeholder="Type your Email" required /> <br />

                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="" placeholder="Type your password" required /> <br />

                    

                    <label htmlFor="confirm">photo url </label>
                    <input className="form-control" type="text" name="photo" id="" placeholder="Type your Confirm password" required /> <br />

                    <input className="form-control bg-info fw-bold" type="submit" value="Register" />
                </form>
               
                <Link className="login-account mt-3" to="/login">I have an account, Login</Link>
            </div>

            <p className="text-danger text-center mt-4">{error}</p>

        </div>
    </div>
    );
};

export default Register;