
import '../../styles/Header.css';
import Nav from './Nav';
import { useState } from 'react';
function Header (setHambur){
    return(
        <header className='section-header'>
            <Nav></Nav>
        </header>
    )
}

export default Header 