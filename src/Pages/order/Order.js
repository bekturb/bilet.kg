import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faX} from "@fortawesome/free-solid-svg-icons";
import './Order.scss'
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import OrderCart from "./OrderCart";
import {getSingleItem} from "../../Services/redux/Actions/action";

const Order = () => {

    const {id} = useParams()
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    const dispatch = useDispatch()


    return (
        <section id='order'>
            <div className="container">
                <div className="order">
                    <div className='order__cart'>
                        {
                            array.map((el,idx) => (
                                <div key={idx}>
                                    <OrderCart id={id} key={idx} el={el}/>
                                </div>

                            ))
                        }
                    </div>
                    <div>
                        <Link to={`/single/${id}`} onClick={() => dispatch(getSingleItem(id))}>
                            <FontAwesomeIcon className='order--icon' icon={faX}/>
                        </Link>
                    </div>
                    <h2 className='order--cinema'>Сцена</h2>
                </div>
            </div>
        </section>
    );
};

export default Order;