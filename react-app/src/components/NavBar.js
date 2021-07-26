
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Modal } from '../context/Modal'
import { login } from '../store/session';
import LogoutButton from './auth/LogoutButton';
import LogRegModal from './auth'
import './Navigation.css'
import '../assets/logo.jpg'


const NavBar = () => {
  const [showModal, setShowModal] = useState(false)
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    const email = 'demo@aa.io'
    const password = 'password'
    dispatch(login(email, password))
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/dashboard/studying' exact={true} className="nav-btn" activeClassName='nav-btn__active'>
          Dashboard
        </NavLink>
        <LogoutButton/>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="nav-btn" onClick={() => {demoLogin()}}>Demo User</div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {/* <LogRegModal setShowModal={setShowModal}/> */}
          </Modal>
        )}
        <div className="nav-btn" onClick={() => {setShowModal(true)}}>Log In</div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LogRegModal setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    )
  }

  return (
    <nav className="nav">
        <header className='lowerNav'>
          <div className='lowerNav__div'>
            <NavLink to='/' exact={true} activeClassName='nav-btn__active'>
              <div className='nav-title'>
                <img id='icon' src="../assets/" alt="logo"/>
                DwayneScape
              </div>
            </NavLink>
          </div>
        </header>
        <div className='nav-right'>
          <div className='nav-right'>
            <NavLink to='/search/all' exact={true} activeClassName='nav-btn__active'>
              <div className='nav-btn'>
                Search
              </div>
            </NavLink>
            <>
              {sessionLinks}
            </>
          </div>
        </div>
    </nav>
  );
}

export default NavBar;
