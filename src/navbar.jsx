import React from "react"

import './navbar.css'
export function Navbar(){

    return(
        <div className="navbar">
            <div className="logo">Logo</div>

            <div className="buttonsNav">
                <button>Home</button>
                <button>Skills</button>
                <button>Education</button>
                <button>Projects</button>
                <button>Dev Blog</button>
                <button>Contact</button>
            </div>
        </div>


    )

    
}