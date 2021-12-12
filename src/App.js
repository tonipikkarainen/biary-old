import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function SignIn() {
    // Nämä muokkaa jotenkin fiksummaksi, sillä nyt kutsutaan kahdessa paikassa
    const dispatch = useDispatch();
    const { setUser } = bindActionCreators(actionCreators, dispatch);
    // Google sign-in
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // // muokataan omaa storea asettamalla käyttäjä
                setUser(result.user.displayName);
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <div>
            <Button variant='contained' onClick={signIn}>
                Sign in
            </Button>
        </div>
    );
}

function SignOut() {
    const dispatch = useDispatch();
    const { setUser } = bindActionCreators(actionCreators, dispatch);
    return (
        auth.currentUser && (
            <div>
                <Button
                    variant='outlined'
                    onClick={() => auth.signOut().then(setUser(null))} // muokataan omaa storea poistamalla käyttäjä
                >
                    Sign out
                </Button>
            </div>
        )
    );
}

function MainView() {
    const userName = auth.currentUser.displayName;
    return <div>Hello {userName}!</div>;
}

function App() {
    // Tätä storea ei välttämättä tarvita käyttäjälle, mutta ehkä muille
    const userStore = useSelector((state) => state.user);

    const [user] = useAuthState(auth);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>state user is {userStore}</p>
                <p>Welcome to Biary - Book diary</p>
                {/* <Button onClick={() => setUser('Testi')}>set </Button>
                <Button onClick={() => setUser('')}>unset </Button> */}
                <SignOut />
                <div>{user ? <MainView /> : <SignIn />}</div>
            </header>
        </div>
    );
}

export default App;
