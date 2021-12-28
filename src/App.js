import logo from './logo.svg';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';

import SignIn from './components/signIn';
import SignOut from './components/signOut';
import MainView from './views/mainView';
import { auth } from './firebase-config';

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
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>state user is {userStore}</p>
                <p>Welcome to Biary - Book diary </p>
                {/* <Button onClick={() => setUser('Testi')}>set </Button>
                <Button onClick={() => setUser('')}>unset </Button> */}
                <SignOut />
                <div>{user ? <MainView /> : <SignIn />}</div>
            </header>
        </div>
    );
}

export default App;
