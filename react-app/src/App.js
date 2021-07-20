import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoginForm from './components/auth/LoginForm';
// import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LogReg from './components/auth/index';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';
import CategoryDeckSearch from './components/CategoryDeckSearch'


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true} component={LogReg}>
          {/* <LoginForm/> */}
        </Route>
        <Route path='/sign-up' exact={true} component={LogReg}>
          {/* <SignUpForm /> */}
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <DashBoard />
        </ProtectedRoute>
        <Route path='/welcome' exact={true}>
          {/* <LandingPage /> */}
          <h1>HI</h1>
        </Route>
        <Route path='/categories'>
          <CategoryDeckSearch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// const RightSide = ({ containerRef, click, current, classList }) => {
//   return (
//     <div
//       className={`right-side ${classList}`}
//       ref={containerRef}
//       onClick={click}
//     >
//       <div className="inner-container">
//         <div className="text">{current}</div>
//       </div>
//     </div>
//   );
// };

export default App;
