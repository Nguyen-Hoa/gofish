import React from 'react';
import { useHistory } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops';
import Button from './../button/Button';

import './dashboard.css';

const UserTable = () => {
    return(
        <div className="dashboard-table">
            <div className="dashboard-user-table">
                user data
            </div>
        </div>
    );
}

const GlobalTable = () => {
    return(
        <div className="dashboard-table">
            <div className="dashboard-global-table">
                global data
            </div>
        </div>
    );
}

export default function Dashboard ({ angler }){
    const history = useHistory();

    return(
        <div>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={config.molasses}
            >
                {props =>
                    <div className="Dashboard" style={props}>
                        <header className="dashboard-header">
                            <div>{ angler ? `${angler}'s` : `Angler's`} Dashboard</div>
                            <div className="log-out-button">
                                <Button label="Log out" onClick={() => history.push('/')}/>
                            </div>
                        </header>
                        <div className="dashboard-tables">
                            <UserTable/>
                            <GlobalTable/>
                        </div>
                    </div>
                }
            </Spring>
        </div>
    );
}