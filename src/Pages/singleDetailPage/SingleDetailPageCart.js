import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowUpFromBracket,
    faC,
    faCalendarDays, faCircleExclamation,
    faClock,
    faEye,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import twitter from '../../Assets/Images/lucide_twitter.svg'
import facebook from '../../Assets/Images/Group.svg'

const SingleDetailPageCart = ({el}) => {



    return (
        <>
            <div className="single">
                <div className='row single--page'>
                    <div className='col-6'>
                        <img className='single--page__img' src={el.img} alt=""/>
                    </div>
                    <div className='col-6'>
                        <h1 className='single--page__title'>{el.name}</h1>
                        <div className='single--page__timeCharacter'>
                            <FontAwesomeIcon className='single--page__timeCharacter--calendar'
                                             icon={faCalendarDays}/>
                            <p className='single--page__timeCharacter--time'>{el.time}</p>
                        </div>
                        <div className='single--page__duration'>
                            <FontAwesomeIcon className='single--page__duration--clock' icon={faClock}/>
                            <p className='single--page__duration--time'>Продолжительность: 3 часа</p>
                        </div>
                        <div className={el.price === '0' ? '' : 'single--page__price'}>
                            {
                                el.price === '0' ? '' : <FontAwesomeIcon className='single--page__price--icon' icon={faC}/>

                            }
                            <p className='single--page__price--item'>{
                                el.price === '0' ? '' : `Стоимость: ${el.price}`
                            }</p>
                        </div>
                        <div className='single--page__location'>
                            <FontAwesomeIcon className='single--page__location--locationDot'
                                             icon={faLocationDot}/>
                            <p className='single--page__location--address'>{el.address}</p>
                        </div>
                        <div className='single--page__media'>
                            <FontAwesomeIcon className='single--page__media--download'
                                             icon={faArrowUpFromBracket}/>
                            <FontAwesomeIcon className='single--page__media--whatsapp' icon={faWhatsapp}/>
                            <FontAwesomeIcon className='single--page__media--instagram' icon={faInstagram}/>
                            <img className='single--page__media--facebook' src={facebook} alt=""/>
                            <img className='single--page__media--twitter' src={twitter} alt=""/>
                        </div>
                        <div className='single--page__view'>
                            <FontAwesomeIcon className='single--page__view--icon' icon={faEye}/>
                            <p className='single--page__view--amount'>{el.fond}</p>
                        </div>
                        <div className='single--page__warning'>
                            {
                                el.price === '0' ? '' :
                                    <FontAwesomeIcon className='single--page__warning--icon'
                                                     icon={faCircleExclamation}/>
                            }
                            <p className='single--page__warning--ticket'>{el.price === '0' ? '' : 'Билеты возврату не подлежат.'}</p>
                        </div>
                        <Link to={`/order/${el.id}`}>
                            <button className={el.price === '0' ? 'single--page--not' : 'single--page--btn'}>{el.price === '0' ? '' : 'ЗАБРОНИРОВАТЬ'}</button>

                        </Link>
                    </div>
                </div>
                <div className='single--description'>
                    <h3 className='single--description--theme'>Описание</h3>
                    <hr className='single--description--line'/>
                    <p className='single--description--title'>{el.description}</p>
                    <div className='single--description--contact'>
                        <p className='single--description--contact--price'>{`${el.price === '0' ? '' : `Стоимость билета: ${el.price}`}`}</p>
                        <p className='single--description--contact__number'>Справки по
                            тел:{el.number_phone}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleDetailPageCart;