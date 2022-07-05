import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";
import '../all/All.scss'




const All = () => {

    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)

    useEffect(() => {
        setTimeout(async () => {
            dispatch(getAllItems())
        },2000)
    }, [dispatch])



    return (
        <section id='all'>
            <div className="all">
                <div className='all__head'>
                    <h1 className='all__head__title'>All</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        allItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!allItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default All;