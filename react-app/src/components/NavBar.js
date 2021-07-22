
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Modal } from '../context/Modal'
import LogoutButton from './auth/LogoutButton';
import LogRegModal from './auth'
import './Navigation.css'


const NavBar = () => {
  const [showModal, setShowModal] = useState(false)
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/dashboard/studying' exact={true} activeClassName='active'>
          <button className="nav-btn">
            Account
          </button>
        </NavLink>
        <NavLink to='/users' exact={true} activeClassName='active'>
          <button className="nav-btn">
            Users
          </button>
        </NavLink>
        <LogoutButton/>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <button className="nav-btn" onClick={() => {setShowModal(true)}}>Log In</button>
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
        <header className='upperNav'>
          <div class="header">
              <h1>DwayneScape</h1>
          </div>
        </header>
        <header className='lowerNav'>
          <div className='lowerNav__div'>
              <NavLink to='/' exact={true} activeClassName='active'>
                <button className='nav-btn'>
                  Home
                </button>
              </NavLink>
              <NavLink to='/categories' exact={true} activeClassName='active'>
                <button className='nav-btn'>
                  Search
                </button>
              </NavLink>
              <>
                {sessionLinks}
              </>
        </div>
      </header>
    </nav>
  );
}

export default NavBar;
