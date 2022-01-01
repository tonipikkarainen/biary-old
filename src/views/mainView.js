import { auth } from '../firebase-config';

function MainView() {
    if (auth.currentUser != null) {
        const userName = auth.currentUser.displayName;
        return <div>Hello {userName}!</div>;
    }

    return (
        <div className='mainDiv'>
            <div className='helloLogoScreen'>
                <img
                    src={require('../images/biary-v3-opt.svg').default}
                    alt='mySvgImage'
                    className='helloLogo'
                />
            </div>

            <div className='helloScreen'>Welcome to Biary.</div>
        </div>
    );
}

export default MainView;
