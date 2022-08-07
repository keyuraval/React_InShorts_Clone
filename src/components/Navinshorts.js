import React from 'react'
import "./Navinshorts.css"
import HamBurgerDrawer from "./HamBurgerDrawer.js"

const Navinshorts = () => {
    return (
        <div className='nav'>
            <div className="icon">
                <HamBurgerDrawer></HamBurgerDrawer>
            </div>
            <img
                style={{ cursor: "pointer" }}
                src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                height="80%"
                alt="logo"
            />

        </div>
    )
}

export default Navinshorts
