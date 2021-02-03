import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops';
import Input from '../basic-text-input/BasicTextInput';
import Button from '../button/Button';

import './signup.css';

const SignUpForm = (props) => {
    return (
        <div className="signup-box">
            <header>Create a new account</header>
            <div className="signup-box-item">
                <Input
                    placeholder="First Name"
                    value={props.firstName}
                    onChange={props.setFirstName}
                />
            </div>
            <div className="signup-box-item">
                <Input
                    placeholder="Last Name"
                    value={props.lastName}
                    onChange={props.setLastName}
                />
            </div>
            <div className="signup-box-item">
                <Input
                    placeholder="Email"
                    value={props.email}
                    onChange={props.setEmail}
                />
            </div>
            <div className="signup-box-item">
                <Input
                    placeholder="Last Name"
                    value={props.password}
                    onChange={props.setPassword}
                />
            </div>
            <div className="signup-box-item">
                <Button label="Sign Up" onClick={() => props.history.push('/dashboard')}/>
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

    console.log({firstName, lastName, password, email})
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