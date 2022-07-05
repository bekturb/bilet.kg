import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getSingleItem} from "../../Services/redux/Actions/action";
import './Card.scss'


const Card = ({el}) => {

    const dispatch = useDispatch()

    return (
        <div className='col-4'>
            <div className='card__items'>
                <Link  to={`/single/${el.id}`} onClick={() => dispatch(getSingleItem(el.id))}>
                    <img className='card__items__img' src={el.img} alt=""/>
                    <span className={el.price === '0' ? '' : 'card__items__img--price'}>{el.price === '0' ? '' : `${el.price} сом`}</span>
                </Link>
                <h2 className='card__items__name'>{el.name}</h2>
                <hr className='card__items__line'/>
                <div className='card__items--times'>
                    <span><FontAwesomeIcon className='card__items--times__calendar' icon={faCalendarDays} /></span>
                    <p className='card__items--times--time'>{el.time}</p>
                </div>
                <div className='card__items--address'>
                    <span><FontAwesomeIcon className='card__items--address--location' icon={faLocationDot} /></span>
                    <p className='card__items--address--position'>{el.address}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;