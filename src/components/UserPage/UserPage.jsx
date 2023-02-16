import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Card } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <Card sx={{
        width: 200,
        padding: 2
        }}>
      <h2>{user.username}</h2>
      <p>ID: {user.id}</p>
      <LogOutButton className="btn" />
      </Card>
      <p>Completed Endeavors:</p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
