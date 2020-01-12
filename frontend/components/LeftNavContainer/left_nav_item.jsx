import React from 'react';
import {NavLink} from 'react-router-dom';

const LeftNavItem = props => (
    <div className="side-nav-item">
        <NavLink className="side-nav-item-link" to={props.route}>
            <div className="side-nav-item-link-container">
                <span className="side-nav-item-link-icon">
                    {props.icon}
                </span>
                <span className="side-nav-item-link-title">
                    {props.title}
                </span>
            </div>
        </NavLink>
    </div>
)

export default LeftNavItem;