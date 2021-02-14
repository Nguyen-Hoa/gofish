import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops';
import Button from '../button/Button';
import Input from '../basic-text-input/BasicTextInput';

import './login.css';

const SignInForm = ({history, email, setEmail, password, setPassword}) => {
    return (
        <div className="login-box">
            <header>Welcome to GoFish 2021</header>
            <div className="login-box-item">
                <Input placeholder="Email" value={email} onChange={setEmail}/>
            </div>
            <div className="login-box-item">
                <Input placeholder="Password" value={password} onChange={setPassword}/>
            </div>
            <div className="login-box-item">
                <Button label="Sign In" onClick={() => history.push('/dashboard')}/>
            </div>
            <p>No account yet? <button className="sign-up-button" onClick={() => history.push('/sign-up')}>Sign up here!</button></p>
        </div>
    )
}


export default function Login (){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    console.log(`email: ${email} password: ${password}`)
    return (
        <div className="Login">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={config.molasses}
            >
                {styles =>
                    <div style={styles}>
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