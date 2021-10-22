import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBjF71Gr6tj29AXytKgCXg5xhffXIQLH98',
  authDomain: 'biary-2d90c.firebaseapp.com',
  projectId: 'biary-2d90c',
  storageBucket: 'biary-2d90c.appspot.com',
  messagingSenderId: '760420116628',
  appId: '1:760420116628:web:b3e160af0fb6f7cd362c81',
  measurementId: 'G-HGX7E221DM',
};

const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

// Google sign-in
const signIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

function SignIn() {
  return (
    <div>
      <Button variant='contained' onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <div>
        <Button variant='outlined' onClick={() => auth.signOut()}>
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
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Welcome to Biary - Book diary</p>
        <SignOut />
        <div>{user ? <MainView /> : <SignIn />}</div>
      </header>
    </div>
  );
}

export default App;
