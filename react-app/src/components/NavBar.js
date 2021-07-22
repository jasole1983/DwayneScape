
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
        <NavLink to='/dashboard/studying' exact={true} className="nav-btn" activeClassName='nav-btn__active'>
          Dashboard
        </NavLink>
        <NavLink to='/users' exact={true} activeClassName='nav-btn__active'>
          <div className="nav-btn">
            Users
          </div>
        </NavLink>
        <LogoutButton/>
      </>
    );
  } else {
    sessionLinks = (
      <>
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
                <img id='icon' src='./favicon.ico' alt="logo"/>DwayneScape
              </div>
            </NavLink>
            <div className='nav-right'>
              <NavLink to='/categories' exact={true} activeClassName='nav-btn__active'>
                <div className='nav-btn'>
                  Search
                </div>
              </NavLink>
              <>
                {sessionLinks}
              </>
            </div>
        </div>
      </header>
    </nav>
  );
}

export default NavBar;
