import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';

import { SignInUser } from '~/actions/auth-actions';

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
                <button onClick={signInUser}>Sign in</button>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    SignIn_User: (email, password) => dispatch(SignInUser({ email, password })),
});

AuthScreen.propTypes = {
    SignIn_User: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(AuthScreen);
