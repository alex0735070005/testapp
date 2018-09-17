import React from 'react';
import Menu from '../modules/Menu'
import '../../styles/header.scss';

const Header = () => {
    return(
        <header>
            <div className="container">
                <Menu />
            </div>
        </header>
    )
};


export default Header;
