import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops';
import Button from '../button/Button';

import './signup.css';

const SignUpForm = (props) => {
    return (
        <div className="signup-box">
            <header>Create a new account</header>
            <div className="signup-box-item">
                <input
                    placeholder="First Name"
                    value={props.firstName}
                    onChange={(e) => props.setFirstName(e.target.value)}
                />
            </div>
            <div className="signup-box-item">
                <input
                    placeholder="Last Name"
                    value={props.lastName}
                    onChange={(e) => props.setLastName(e.target.value)}
                />
            </div>
            <div className="signup-box-item">
                <input
                    placeholder="Email"
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                />
            </div>
            <div className="signup-box-item">
                <input
                    placeholder="Last Name"
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                />
            </div>
            <div className="signup-box-item">
                <Button label="Sign In" onClick={() => props.history.push('/dashboard')}/>
            </div>
            <p>No account yet? <a href="http://localhost:3000">Sign up here!</a></p>
        </div>
    )
}

export default function SignUp (){
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const history = useHistory();

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
                        />
                   </div>
                }
            </Spring>
        </div>
    );
}