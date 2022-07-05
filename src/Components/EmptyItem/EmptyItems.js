import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import './EmptyItems.scss'

const EmptyItems = () => {
    return (<div className="container">
        <div className="empty">
            <div className='empty__basket'>
                <FontAwesomeIcon className='empty__basket--icon' icon={faCartShopping}/>
            </div>
            <h2 className='empty__title'>Ничего не найдено</h2>
        </div>
    </div>);
};

export default EmptyItems;