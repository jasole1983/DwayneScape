
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './Navigation.css'
import { Modal } from '../context/Modal'
import LogRegModal from './auth'

const NavBar = () => {
  const [showModal, setShowModal] = useState(false)
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <button className="nav-btn">
          <NavLink to='/dashboard' exact={true} activeClassName='active'>
            Dashboard
          </NavLink>
        </button>
        <button className="nav-btn">
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </button>
        <button className="nav-btn-2">
          <LogoutButton/>
        </button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <button className="nav-btn" onClick={() => {setShowModal(true)}}>
          <LogRegModal setShowModal={setShowModal}/>
        </button>
        <button className="nav-btn">
          Sign Up
        </button>
      </>
    )
  }


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
            <>
              {sessionLinks}
            </>
      </div>
      </header>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LogRegModal />
        </Modal>
      )}
    </nav>
  );
}

export default NavBar;
