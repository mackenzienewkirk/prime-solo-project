import React from "react";
import { useSelector } from "react-redux";
import { Card } from "@mui/material";
import { useHistory } from "react-router-dom";

function Home() {
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const toEndeavorPage = () => {
        history.push(`/endeavor`);
    }

    const toCreate = () => {
        history.push(`/add`);
    }

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
            }}>Hello, {user.username}!</Card>
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
            marginBottom: 80,
            marginLeft: 64,
            marginRight: 6,
            padding: 4,
            lineHeight: 1,
            textAlign: 'left',
            fontSize: 22,
            lineHeight: 1,
            fontFamily: 'Rugrats Sans'
            
        }}>
        <img src='images/in_the_works_logo.png' class="homeLogo"></img>
        </Card> 
        <Card sx={{
                borderRadius: 4,
                boxShadow: 2,
                elevation: 1,
                color: '#FFD30B',
                background: '#46629A',
                width: 350,
                marginTop: -75,
                marginBottom: 3,
                marginLeft: 64,
                marginRight: 6,
                padding: 3,
                lineHeight: 1,
                textAlign: 'left',
                fontSize: 22,
                lineHeight: 1,
                fontFamily: 'Rugrats Sans'
            }}>
                <h3> Need inspiration? </h3>
                <ul>
                    <li>Baking</li>
                    <li>Travel</li>
                    <li>Writing</li>
                    <li>Sewing</li>
                    <li>Wood Working</li>
                    <li>Gardening</li>
                    <li>Painting</li>
                    <li>Strength Training</li>
                    <li>Gaming</li>
                    <li>Hiking</li>
                </ul>
                </Card>
                <Card sx={{
            borderRadius: 4,
            boxShadow: 2,
            elevation: 1,
            color: '#ffccff',
            backgroundColor: '#410064',
            width: 160,
            marginTop: -24,
            marginBottom: 80,
            marginLeft: 4,
            marginRight: 6,
            padding: 2,
            lineHeight: 1,
            textAlign: 'left',
            fontSize: 22,
            lineHeight: 1,
            fontFamily: 'Rugrats Sans'
            
        }}>
        <h2 onClick={toEndeavorPage}>Endeavors</h2>
        </Card> 
        <Card sx={{
            borderRadius: 4,
            boxShadow: 2,
            elevation: 1,
            backgroundColor: '#ffccff',
            color: '#410064',
            width: 160,
            marginTop: -95,
            marginBottom: 40,
            marginLeft: 34,
            marginRight: 6,
            padding: 2,
            lineHeight: 1,
            textAlign: 'left',
            fontSize: 22,
            lineHeight: 1,
            fontFamily: 'Rugrats Sans'
            
        }}>
        <h2 onClick={toCreate}>Create</h2>
        </Card> 
        </div>
    )
}

export default Home;