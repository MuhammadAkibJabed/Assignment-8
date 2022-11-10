import React from 'react';
import logo from '../../images/car_logo_PNG1640.png';
import './Header.css'
import Background from '../../images/AUDI CARS.jpg'

const Header = () => {
    const headerStyle={
        width: "100%",
        height: "400px",
        backgroundImage: "url(" + { Background } + ")" 
    }
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
                <h3 >Audi Car Lovers Hut</h3>
            </div>
            <div style={headerStyle} className='header-text'>This is header text</div>
        </div>
    );
};

export default Header;