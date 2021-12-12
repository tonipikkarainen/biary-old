import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { getAuth } from 'firebase/auth';
import { Button } from '@mui/material';

const auth = getAuth();

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

export default SignOut;
