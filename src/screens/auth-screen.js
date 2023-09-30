import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';

import { GetUserProfile, SignInUser } from '~/actions/auth-actions';

const AuthScreen = (props) => {
    const [email, setEmail] = useState('Abhayrana786@gmail.com');
    const [password, setPassword] = useState('Abhay@123');
    function signInUser() {
        props
            .SignIn_User(email, password)
            .unwrap()
            .then((data) => console.log('data', data))
            .catch((error) => console.log('error', error));
    }
    function getDetails() {
        props.Get_User_Profile({ payload: 'this is payloaad' });
    }
    return (
        <>
            <div className="text-center">
                <h1>Auth SCreen</h1>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="enter email"
                />
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="enter email"
                />
                <div className="flex flex-col gap-4">
                    <button onClick={signInUser}>Sign in</button>
                    <button onClick={getDetails}>Get Details</button>
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    SignIn_User: (email, password) => dispatch(SignInUser({ email, password })),
    Get_User_Profile: (payload) => dispatch(GetUserProfile({ payload })),
});

AuthScreen.propTypes = {
    SignIn_User: PropTypes.func,
    Get_User_Profile: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(AuthScreen);
