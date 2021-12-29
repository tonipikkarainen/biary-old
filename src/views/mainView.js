import { auth } from '../firebase-config';

function MainView() {
    if (auth.currentUser != null) {
        const userName = auth.currentUser.displayName;
        return <div>Hello {userName}!</div>;
    }

    return <div>Hello!</div>;
}

export default MainView;
