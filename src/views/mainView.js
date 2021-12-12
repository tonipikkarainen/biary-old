import { getAuth } from 'firebase/auth';

const auth = getAuth();

function MainView() {
    const userName = auth.currentUser.displayName;
    return <div>Hello {userName}!</div>;
}

export default MainView;
