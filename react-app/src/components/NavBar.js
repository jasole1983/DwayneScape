
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './Navigation.css'
import { Modal } from '../context/Modal'
import LogReg from './auth'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false)
  const user = useSelector(state => state.session.user)

  return (
    <nav className="nav">
        <header className='upperNav'>
          <div class="header">
              <h1>DwayneScape</h1>
          </div>
        </header>
        <header className='lowerNav'>
        <div className='lowerNav__div'>
            <button className='nav-btn'>
              <NavLink to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </button>
            {/* if the user is logged in, hide the "Login" button */
            user ? null : (
            <button className="nav-btn" onClick={() => {setShowModal(true)}}>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </button>
            )
            /* end Login button conditional */}
            {/* if user is logged in, hide "Sign Up" button */
            user ? null : (
            <button className="nav-btn">
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </button>
            )
            /* end Sign up button conditional */}
            <button className="nav-btn">
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>
            </button>
            { /* if user is NOT logged in, hide "Logout" button */
            user ? (
              <LogoutButton/>
            ) : null
            /* end Logout button conditional */}
      </div>
      </header>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LogReg />
        </Modal>
      )}
    </nav>
  );
}

export default NavBar;
