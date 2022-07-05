import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {faCartShopping, faTrashCan, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../basket/Basket.scss'
import {Link, useParams} from "react-router-dom";
import {getPadTime} from "../../Utils/getTime/GetTime";
import {deleteBasket} from "../../Services/redux/Actions/action";

const Basket = ({basket, basketDelete}) => {


    const dispatch = useDispatch()
    const {addBasket,isCounting} = useSelector(s => s)
    const [timeLeft, setTimeLeft] = useState(59)

    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(timeLeft - minutes *  60)

    const cost = addBasket.reduce((acc, rec) => {
        return +rec.price + acc
    }, 0)

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting &&
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 100)
        return () => {
            clearInterval(interval)
        }
    }, [dispatch,timeLeft]);


    return (
        <div className={basket ? 'basket active' : 'basket'}>
            <div className="basket__header">
                {
                    basket ? <FontAwesomeIcon onClick={basketDelete} className='basket__header--icon'
                                              icon={faCartShopping}/> : null
                }
                <h3 className='basket__header--title'>Корзина</h3>
                <div>
                    <span className='basket__header--timer'>{minutes}</span>
                    <span className='basket__header--timer'>:</span>
                    <span className='basket__header--timer'>{seconds}</span>
                </div>
            </div>
            {
                addBasket.length === 0 || timeLeft === 0 ?
                    <div className="basket__header__empty">
                        <div className='basket__header__empty__info'>
                            <div className='basket__header__empty__info__basket'>
                                <FontAwesomeIcon className='basket__header__empty__info__basket--icon'
                                                 icon={faCartShopping}/>
                            </div>
                            <h2 className='basket__header__empty__info__title'>ВАША КОРЗИНА ПУСТА</h2>
                        </div>
                    </div> :
                    <div className='basket__header__body'>
                        {
                            addBasket.map((el) => (
                                <div key={el.id}>
                                    <h1 className='basket__header__body--name'>{el.name}</h1>
                                    <p className='basket__header__body--time'>{el.time}</p>
                                    <div className='basket__header__body--place'>
                                        <div className='basket__header__body--place__number'>
                                            <p className='basket__header__body--place__number__sector'>Сектор : <span
                                                className='basket__header--ticket__sector--name'>Партер</span></p>
                                            <div className='basket__header__body--place__number--section'>
                                                <p className='basket__header__body--place__number--section--row'>Ряд :
                                                    4</p>
                                                <p className='basket__header__body--place__number--section--num'>Место :
                                                    5</p>
                                            </div>
                                        </div>
                                        <div className='basket__header__body--place__ticket--info'>
                                            <div>
                                                <p className='basket__header__body--place__ticket--info--price'>Средний</p>
                                                <p className='basket__header__body--place__ticket--info__sum'>{el.price} сом</p>
                                            </div>
                                            <FontAwesomeIcon onClick={() => dispatch(deleteBasket(el.id))}
                                                             className='basket__header__body--place__ticket--info--icon'
                                                             icon={faX}/>
                                        </div>
                                    </div>
                                    <hr className='basket__header__body--line'/>
                                    <div className='basket__header__body--footer'>
                                        <div className='basket__header__body--footer--total'>
                                            <div className='basket__header__body--footer--total__info'>
                                                <p className='basket__header__body--footer--total__info--price'>Подытог </p>
                                                <p className='basket__header__body--footer--total__info--sale'>Скидка </p>
                                                <p className='basket__header__body--footer--total__info--price'>Итог </p>
                                            </div>
                                            <div className='basket__header__body--footer--total__result'>
                                                <p className='basket__header__body--footer--total__result--number'>{cost} сом </p>
                                                <p className='basket__header__body--footer--total__result--saleNumber'>0
                                                    сом</p>
                                                <p className='basket__header__body--footer--total__result--number'>{cost} сом</p>
                                            </div>
                                        </div>
                                        <div className='basket__header__body--footer--foot'>
                                            <FontAwesomeIcon onClick={() => dispatch(deleteBasket(el.id))}
                                                             className='basket__header__body--footer--foot__icon'
                                                             icon={faTrashCan}/>
                                            <Link to='/register'>
                                                <button onClick={basketDelete} className='basket__header__body--footer--foot__btn'>ОТПРАВИТЬ
                                                    ЗАЯВКУ
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default Basket;