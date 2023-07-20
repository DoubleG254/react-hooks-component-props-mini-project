import React from "react";

function About({text,image}){
    return(
        <aside>
            <img src={image|| "https://via.placeholder.com/215"} alt="blog logo"/>
            <p>{text}</p>
        </aside>
    )
}

export default About