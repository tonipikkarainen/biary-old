import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import React from 'react';
import LogoSvg from '../images/biary-logo-web.svg';

function NavBar() {
    return (
        <nav>
            <div className='navbarLinks'>
                <Link className='navbarLink' to={'/'}>
                    Home
                </Link>
                {auth.currentUser == null && (
                    <Link className='navbarLink' to={'/signin'}>
                        Sign-in
                    </Link>
                )}
                {auth.currentUser != null && (
                    <Link className='navbarLink' to={'/signout'}>
                        Sign-out
                    </Link>
                )}
            </div>
            <div className='navbarLogo'>
                <img
                    src={require('../images/biary-logo-web.svg').default}
                    alt='mySvgImage'
                    className='logoImg'
                />
                <div className='logoText'>iary.</div>
            </div>
        </nav>
    );
}

export default NavBar;
