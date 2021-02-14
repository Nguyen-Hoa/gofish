import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SessionContext from './../../db/session';
import { faunaQueries } from './../../db/query-manager'

import './signup.css';
import { Spring, config } from 'react-spring/renderprops';
import Input from '../basic-text-input/BasicTextInput';
import Button from '../button/Button';


const handleSignUp = (email, password, first, last, history, session) => {
    faunaQueries.register(email, password, first, last)
    .then(e => {
        session.dispatch({ type: 'register', data: e });
        history.push('/dashboard');
    })
    .catch(e => {
        console.log('error signing up...', e);
    })
}

const SignUpForm = ({firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, history, session}) => {
    return (
        <div className="signup-box">
            <header>Create a new account</header>
            <div className="signup-box-item">
                <Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={setFirstName}
                />
            </div>
            <div className="signup-box-item">
                <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={setLastName}
                />
            </div>
            <div className="signup-box-item">
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={setEmail}
                />
            </div>
            <div className="signup-box-item">
                <Input
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                />
            </div>
            <div className="signup-box-item">
                <Button label="Sign Up" onClick={() => handleSignUp(email, password, firstName, lastName, history, session)}/>
            </div>
        </div>
    )
}

export default function SignUp (){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const sessionContext = useContext(SessionContext)

    return (
        <div className="SignUp">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={config.molasses}
            >
                {props =>
                    <div style={props}>
                        <SignUpForm 
                            firstName={firstName}
                            setFirstName={setFirstName}
                            lastName={lastName}
                            setLastName={setLastName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            history={history}
                            session={sessionContext}
                        />
                   </div>
                }
            </Spring>
        </div>
    );
}