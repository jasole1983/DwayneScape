import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
// import logo from "./logo.svg"
import "./Login.css"
import "@fontsource/open-sans"
import therock from "./therock.svg"

const LoginForm = ( ) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className="header-3">The Rock Says...</div>
      <div className="header-2">Log In</div>
      <div className="content"></div>
      <div className='image-2'>
        <img className="img" src={therock} alt=""/>
      </div>
      <div className="form">
        <form onSubmit={onLogin}>
          <div className="error">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="form-group-2">
          <label className="label" htmlFor='email'>Email</label>
          <input
            className='input-2'
            name='email'
            type='text'
            value={email}
            onChange={updateEmail}
          />
          </div>
          <div className="form-group-2">
            <label className="label" htmlFor='password'>Password</label>
            <input
              className='input'
              name='password'
              type='password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div className="footer-2">
          <button type="submit" className="btn">
              Log In
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
