import React from "react";
import { useSelector } from "react-redux";
import { Card } from "@mui/material";

function Home() {
    const user = useSelector((store) => store.user);

    return(
        <div>
            <Card sx={{
                borderRadius: 4,
                boxShadow: 2,
                elevation: 1,
                color: '#FFD30B',
                background: '#46629A',
                width: 350,
                marginTop: 1,
                marginBottom: 3,
                marginLeft: 4,
                marginRight: 6,
                paddingLeft: 4,
                paddingTop: 1.5,
                paddingBottom: 1.5,
                paddingRight: 1,
                lineHeight: 1,
                textAlign: 'left',
                fontSize: 22,
                lineHeight: 1,
                fontFamily: 'Rugrats Sans'
            }}>Welcome back, {user.username}!</Card>
            {/* <Card sx={{
                textAlign: 'left',
                fontSize: 18,
                backgroundColor: '#AEC9FF',
                color: '#410064',
                lineHeight: 1,
                fontFamily: 'Rugrats Sans',
                paddingTop: 4,
                paddingBottom: 40,
                paddingLeft: 4,
                marginLeft: 4,
                marginRight: 55,
                marginBottom: 20,
                marginTop: -23,
                lineHeight: 1,
                textAlign: 'left',
                borderRadius: 4,
                }}></Card> */}
                    
        <Card sx={{
            textAlign: 'left',
            fontSize: 18,
            lineHeight: 1,
            backgroundColor: '#AEC9FF',
            color: '#410064',
            fontFamily: 'Rugrats Sans',
            padding: 4,
            marginLeft: 4,
            marginRight: 60,
            marginTop: 4,
            marginBottom: 20,
            textAlign: 'left',
            borderRadius: 4,
        }}><h2>'In The Works' is an idea tracking application to help you keep track of your hobbies, projects, and endeavors.</h2>
        <h3>-Had an idea for a great new project?</h3>
        <h3>-Want to keep track of ideas for a trip your planning?</h3>
        <h3>-Feeling inspired to learn something new?</h3>
        </Card>
        <Card sx={{
            borderRadius: 4,
            boxShadow: 2,
            elevation: 1,
            backgroundColor: '#ffccff',
            color: '#410064',
            maxWidth: 420,
            marginTop: -74,
            marginBottom: 60,
            marginLeft: 64,
            marginRight: 6,
            marginBottom: 6,
            padding: 4,
            lineHeight: 1,
            textAlign: 'left',
            fontSize: 22,
            lineHeight: 1,
            fontFamily: 'Rugrats Sans'
            
        }}>
        <img src='images/in_the_works_logo.png' class="homeLogo"></img>
        </Card> 
        </div>
    )
}

export default Home;