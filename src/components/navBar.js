import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';

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
                <div>Logo</div>
            </div>
        </nav>
    );
}

export default NavBar;
