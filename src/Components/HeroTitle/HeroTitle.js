import React from 'react';
import Vector from "../../Assets/Images/Vector.svg";
import {useState} from "react";
import {useDispatch} from "react-redux";
import './HeroTitle.scss'
import {getSortItems} from "../../Services/redux/Actions/action";

const Hero = () => {
    const dispatch = useDispatch()
    const [sort, setSort] = useState(false)
    const handleChange = () => {
        setSort(!sort)
    }
    return (
        <div className='hero__sort'>
            <img onClick={handleChange} className='hero__sort--img' src={Vector} alt=""/>
            {
                sort ?
                    <div className='hero__sort--items'>
                        <button onClick={(e) => dispatch(getSortItems(e.target.value))} className='hero__sort--items--item' value="new">Сначала новые публикации</button>
                        <hr className='hero__sort--items--line'/>
                        <button onClick={(e) => dispatch(getSortItems(e.target.value))} className='hero__sort--items--item' value="old">Сначала старые публикации</button>
                    </div> : ''
            }
        </div>
    );
};

export default Hero;