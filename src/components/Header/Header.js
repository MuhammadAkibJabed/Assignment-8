import React from 'react';
import logo from '../../images/car_logo_PNG1640.png';
import './Header.css'


const Header = () => {
    
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
                <h3 >Audi Car Lovers Hut</h3>
            </div>
            <div className='header-text'>
                <h3>Hey Audi Lovers what's going on?</h3>
                <h3>This is the place where you can choose your favourite Audi cars.
                </h3>
                <h3>You have to choose your most favourite Audi cars with limited budget </h3>
                <h1>Budget limit: $10M</h1>
            </div>
        </div>
    );
};

export default Header;