import React from 'react';
import {NavLink} from 'react-router-dom';


const LeftNavFoldersIndexItem = props => (
    <div className="side-nav-folder">
        <NavLink className="side-nav-folder-link" to={props.route}>
            <div className="side-nav-folder-link-container">
                <span className="side-nav-folder-link-title">
                    {props.title}
                </span>
            </div>
        </NavLink>
    </div>
)

export default LeftNavFoldersIndexItem;