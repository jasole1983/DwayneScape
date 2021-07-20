
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './Navigation.css'

const NavBar = () => {
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
            <button className="nav-btn">
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </button>
            <button className="nav-btn">
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
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
      </div>
      </header>
    </nav>
  );
}

export default NavBar;
