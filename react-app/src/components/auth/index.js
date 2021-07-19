import React, { useState } from 'react';
import LoginForm from "./LoginForm"
import SignUpForm from './SignUpForm';
import './index.styles.css';
import { useHistory } from 'react-router-dom';

const LogReg = () => {
  const [isLoginActive, setLoginActive] = useState(true);
  const history = useHistory();
  const current = isLoginActive ? 'Sign-Up' : 'Login';
  const currentActive = isLoginActive ? 'login' : 'sign-up';
  const [classList, setClassList] = useState('right');

  const click = () => {
    if (isLoginActive) {
      setClassList('left');
      history.push('/sign-up');
    } else {
      setClassList('right');
      history.push('/login');
    }
    setLoginActive(!isLoginActive);
  };

  return (
    <div className="logreg">
      <div className="log__app">
        <div className="log__login">
          <div className="container">
            {isLoginActive && <LoginForm containerRef={(ref) => current} />}
            {!isLoginActive && <SignUpForm containerRef={(ref) => current} />}
          </div>
          <RightSide
            current={current}
            containerRef={(ref) => currentActive}
            click={click}
            classList={classList}
          />
        </div>
      </div>
    </div>
  );
};

const RightSide = ({ containerRef, click, current, classList }) => {
  return (
    <div
      className={`right-side ${classList}`}
      ref={containerRef}
      onClick={click}
    >
      <div className="inner-container">
        <div className="text">{current}</div>
      </div>
    </div>
  );
};

export default LogReg;
