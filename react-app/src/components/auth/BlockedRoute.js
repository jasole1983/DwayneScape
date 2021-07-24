import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const BlockedRoute = props => {
  const user = useSelector(state => state.session.user)

  return (
    <Redirect to='/'/>
  )
};


export default BlockedRoute;
