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
      <img src='images/baking.jpg' className='baking'></img>
      <img src='images/camping.jpg' className='camping'></img>
      <img src='images/cooking.jpg' className='cooking'></img>
      <img src='images/donuts.jpg' className='donuts'></img>
      <img src='images/embroidery.jpg' className='embroidery'></img>
      <img src='images/gardening.jpg' className='gardening'></img>
      {/* <img src='images/pillow.jpg' className='pillow'></img>
      <img src='images/yarn.jpg' className='yarn'></img> */}
      <Card sx={{
        width: 260,
        height: 140,
        marginTop: -40,
        marginLeft: 64,
        marginRight: 15,
        marginBottom: 10,
        padding: 2,
        color: '#FFD30B',
            background: '#46629A',
            
        }}>
          <Card sx={{
            borderRadius: 16,
            marginRight: 8,
            alignProperty: 'center'
          }}>
          </Card>
      <h2>{user.username}</h2>
      <LogOutButton className="btn" />
      </Card>
      <br></br>

      {/* <br></br>
      <Card sx={{
        width: 200,
        padding: 2,
        marginLeft: 40,
        backgroundColor: '#FFD30B',
            color: '#46629A',
        marginTop: -7,
        marginBottom: 10
        }}><h3>Complete Endeavors:</h3>
        </Card> 
        <Grid sx={{ 
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(3, 2fr)',
            padding: 1,
            marginLeft: -4,
            elevation: 8
            }}>
            {endeavor?.map(endeavor => (
                <EndeavorItem key={endeavor.id} endeavor={endeavor} />
            ))}
        </Grid>  */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
