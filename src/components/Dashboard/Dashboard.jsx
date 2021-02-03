import React, { useState } from 'react';
import { Spring, config } from 'react-spring/renderprops';

import './dashboard.css';


const Header = ({ angler }) => {
    return(
        <div className="dashboard-header">
            {angler || 'Angler'} Dashboard
        </div>
    );
}

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

export default function Dashboard (){
    return(
        <div>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={config.molasses}
            >
                {props =>
                    <div className="Dashboard" style={props}>
                        <header>
                            <Header/>
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