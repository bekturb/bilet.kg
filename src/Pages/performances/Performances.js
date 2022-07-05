import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import './Performances.scss'

const Performances = () => {

    const {allItems} = useSelector(s => s)
    console.log(allItems)

    const {id:userId} = useParams()
    console.log(userId)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const performanceItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(performanceItems)
    // if (performanceItems.length === 0){
    //     return <EmptyItems/>
    // }
    return (
        <section id='performance'>
            <div className="performance">
                <div className='performance__head'>
                    <h1 className='performance__head__title'>Performance</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        performanceItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!performanceItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Performances;