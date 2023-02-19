import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import EndeavorItem from '../EndeavorItem/EndeavorItem';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const endeavor = useSelector(store => store.endeavor);

    useEffect(() => {
        dispatch({ type: 'FETCH_ENDEAVOR' });
    }, [dispatch]);
    

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
          </Card>
      <h2>{user.username}</h2>
      <p>ID: {user.id}</p>
      <LogOutButton className="btn" />
      </Card>
      <br></br>
      {/* <Card sx={{
        width: 200,
        padding: 3,
        marginLeft: 35,
        backgroundColor: '#AEC9FF',
            color: '#46629A',
        marginTop: -24,
        marginBottom: 15
        
        }}>
        </Card> */}
        <Grid sx={{ 
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(3, 2fr)',
            padding: 1,
            elevation: 8
            }}>
            {endeavor?.map(endeavor => (
                <EndeavorItem key={endeavor.id} endeavor={endeavor} />
            ))}
        </Grid>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
