import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import './Various.scss'

const Various = () => {

    const dispatch = useDispatch()


    const {id: userId} = useParams()
    const {allItems} = useSelector(s => s)



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const variousItems = allItems.filter(el => {
        return el.category === +userId
    })
    return (
        <section id='various'>
            <div className="various">
                <div className='various__head'>
                    <h1 className='various__head__title'>Other</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        variousItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!variousItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Various;