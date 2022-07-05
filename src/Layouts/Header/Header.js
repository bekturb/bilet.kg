import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSearchItem} from "../../Services/redux/Actions/action";
import Basket from "../../Pages/basket/Basket";


const Header = () => {


    const [searchTitle, setSearchTitle] = useState('')
    const [basket, setBasket] = useState(false)
    const dispatch = useDispatch()
    const {addBasket} = useSelector(s => s)



    const handleSearch = (e,) => {
        setSearchTitle(e.target.value)
        dispatch(getSearchItem(searchTitle))
    }
    const basketCreate = () => {
        setBasket(true)
    }
    const basketDelete = () => {
        setBasket(false)
    }



    return (
        <header id="header">
            <div className="header--container">
                <div className="header">
                    <Link to='/' className="header__logo">BILET.KG</Link>
                    <div className="header__inputs">
                        <input onChange={handleSearch} type="text" placeholder="Поиск концертов, исполнителей..."
                               className="header__inputs__input"/>
                        <span onClick={() => dispatch(getSearchItem(searchTitle))}><FontAwesomeIcon
                            icon={faMagnifyingGlass} className="header__inputs__search"/></span>
                    </div>
                    <div>
                        {
                            addBasket.length > 0 ? <div className='header__circle'>{addBasket.length}</div> : null
                        }
                        <FontAwesomeIcon onClick={basketCreate} icon={faCartShopping} className="header__basket"/>
                    </div>
                    {
                        basket ? <Basket basket={basket}   basketDelete={basketDelete}/> : null
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;