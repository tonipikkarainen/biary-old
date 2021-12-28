import { auth } from '../firebase-config';

function MainView() {
    const userName = auth.currentUser.displayName;
    return <div>Hello {userName}!</div>;
}

export default MainView;
