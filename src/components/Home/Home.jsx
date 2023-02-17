import React from "react";
import { useSelector } from "react-redux";

function Home() {
    const user = useSelector((store) => store.user);

    return(
        <div>
            <h1>Welcome back, {user.username}!</h1>
            <img src='images/in_the_works_logo.png' class="homeLogo"></img>
            <h2></h2>
        </div>
    )
}

export default Home;