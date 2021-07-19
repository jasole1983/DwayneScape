import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
// import logo from "./logo.svg"
import therock from "./therock.svg"
import "./Login.css"

const SignUpForm = ({ containerRef }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="container">
    <div className="header">The Rock Says...</div>
    <div className="header-2">Sign-Up</div>
    <div className="content"></div>
    <div className='image'>
      <img className="img" src={therock} alt=""/>
    </div>
    <div className="form">
    <form onSubmit={onSignUp}>
      <ul className="error">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </ul>
      <div>
        <div className="form-group">
        <label className="label">User Name</label>
        <input
          className="input"
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      </div>
      <div>
        <div className="form-group">
        <label className="label">Email</label>
        <input
          className="input"
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      </div>
      <div>
        <div className="form-group">
        <label className="label">Password</label>
        <input
          className="input"
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      </div>
      <div>
        <div className="form-group">
        <label className="label">Confirm Password</label>
        <input
          className="input"
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          Sign Up
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default SignUpForm;
