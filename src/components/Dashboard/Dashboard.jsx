import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SessionContext from '../../db/session';
import { faunaQueries } from '../../db/query-manager';
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

const handleLogOut = (event, sessionContext, history) => {
    return faunaQueries.logout()
    .then(() => {
        sessionContext.dispatch({ type: 'logout', data: null });
        history.push('/');
        event.preventDefault();
    })
}

export default function Dashboard ({ angler }){
    const history = useHistory();
    const sessionContext = useContext(SessionContext)

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
                                <Button label="Log out" onClick={(e) => handleLogOut(e, sessionContext, history)}/>
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