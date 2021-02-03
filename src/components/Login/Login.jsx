import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops';
import Button from '../button/Button';

import './login.css';

const EmailField = ({email, setEmail}) => {
    return (
        <div className="login-email">
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    )
}

const PasswordField = ({password, setPassword}) => {
    return (
        <div className="login-password">
            <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
            />
        </div>
    )
}

const SignInForm = ({email, setEmail, password, setPassword, history}) => {
    console.log(`email: ${email} password: ${password}`)
    return (
        <div className="login-box">
            <header>Welcome to GoFish 2021</header>
            <div className="login-box-item">
                <EmailField email={email} setEmail={setEmail}/>
            </div>
            <div className="login-box-item">
                <PasswordField password={password} setPassword={setPassword}/>
            </div>
            <div className="login-box-item">
                <Button label="Sign In" onClick={() => history.push('/dashboard')}/>
            </div>
            <p>No account yet? <a href="http://localhost:3000/sign-up">Sign up here!</a></p>
        </div>
    )
}

export default function Login (){
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const history = useHistory();

    return (
        <div className="Login">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={config.molasses}
            >
                {props =>
                    <div style={props}>
                        <SignInForm 
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