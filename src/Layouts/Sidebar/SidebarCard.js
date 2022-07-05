import React from 'react';
import {NavLink} from "react-router-dom";

const SideBarCard = ({el}) => {
    return (
        <div>
            <NavLink to={`${el.name === "Home" ? '/' : el.name}/${el.id}`} className='sidebar__navbar'>{el.name === 'Home' ?  null : el.name} </NavLink>
        </div>
    );
};

export default SideBarCard;