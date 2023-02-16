import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Card } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <Card sx={{
        width: 200,
        padding: 2,
        color: '#FFD30B',
            background: '#46629A',
        }}>
          <Card sx={{
            borderRadius: 16,
            marginRight: 8,
            marginLeft: 8,
            alignProperty: 'center'
          }}>
          <img src='images/profile_pic.jpg'></img>
          </Card>
      <h2>{user.username}</h2>
      <p>ID: {user.id}</p>
      <LogOutButton className="btn" />
      </Card>
      <br></br>
      <Card sx={{
        width: 200,
        padding: 2,
        marginLeft: 35,
        marginTop: -34,
        marginBottom: 40
        
        }}>
      <Card sx={{
        padding: 2
        
      }}>Completed Endeavors:</Card>
      </Card>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
