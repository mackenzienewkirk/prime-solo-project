import React from 'react';
import { Card } from '@mui/material';

function AboutPage() {
    return(
<Card sx={{
                textAlign: 'left',
                fontSize: 25,
                backgroundColor: '#AEC9FF',
                color: '#410064',
                lineHeight: 1,
                fontFamily: 'Rugrats Sans',
                padding: 2,
                marginLeft: 6,
                marginRight: 6,
                lineHeight: 1,
                textAlign: 'left',
                borderRadius: 4,
                }}>
            <img src='images/QRCode.JPG' class="image2"></img>
        <Card sx={{
            textAlign: 'left',
            fontSize: 16,
            lineHeight: 1,
            backgroundColor: '#ffffff',
            color: '#410064',
            fontFamily: 'Rugrats Sans',
            padding: 3,
            marginLeft: 2,
            marginRight: 50,
            marginTop: -38,
            textAlign: 'left',
            borderRadius: 4,

        }}>
            <h2>'In The Works'</h2>
            <h3>An application to record ideas, hobbies, progress, and goals.</h3>
            <h3 >Technologies used:</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Redux/Saga</li>
          <li>Material UI</li>
          <li>PostgreSQL</li>
          <li>Postico 2</li>
          <li>Postman</li>
          <li>Node.js</li>
        </ul>
            <h3>Special thanks to the Vonnegut Cohort, Matt, Josee, my family, and everyone watching!</h3>
        </Card>
</Card>
    )
}

export default AboutPage;