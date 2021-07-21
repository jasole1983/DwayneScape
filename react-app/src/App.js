import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';
import CategoryDeckSearch from './components/CategoryDeckSearch'
import SideStudyBar from './components/SideStudyBar/SideStudyBar';
import AnswerCard from './components/AnswerCard/AnswerCard';
import QuestionCard from './components/QuestionCard/QuestionCard';
import './index.css'


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
        <Route path='/' exact={true}>
          <LandingPage />
        </Route>
        <Route path='/categories'>
          <CategoryDeckSearch />
        </Route>
        <Route path='/study'>
          <div className="study-session">
          <SideStudyBar />
          <QuestionCard />
          <AnswerCard />
          </div>
        </Route>
        <ProtectedRoute path='/dashboard' exact={true} >
          <DashBoard />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
