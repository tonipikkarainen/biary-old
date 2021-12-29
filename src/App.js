import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';

import SignIn from './components/signIn';
import SignOut from './components/signOut';
import NavBar from './components/navBar';
import MainView from './views/mainView';
import { auth } from './firebase-config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
function App() {
    // Tätä storea ei välttämättä tarvita käyttäjälle, mutta ehkä muille
    // On tässä nyt malliksi siitä, miten reduxia voi käyttää
    // tämä tyhjenee kun päivittää sivun?
    // state asetetaan sign-innissä
    const userStore = useSelector((state) => state.user);
    const [user] = useAuthState(auth);
    // Testailua
    console.log(auth.currentUser);

    return (
        <Router>
            <div className='App'>
                {/*                 <p>state user is {userStore}</p>
                 */}
                <NavBar />
                <Routes>
                    <Route path='/signin' element={<SignIn />}></Route>
                    <Route path='/signout' element={<SignOut />}></Route>
                    <Route path='/' element={<MainView />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
