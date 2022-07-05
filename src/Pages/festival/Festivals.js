import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import './Festival.scss'

const Festivals = () => {

    const dispatch = useDispatch()

    const {allItems} = useSelector(s => s)

    const {id: userId} = useParams()
    console.log(userId)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const festivalItem = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(festivalItem)

    // if (festivalItem.length === 0){
    //     return <EmptyItems/>
    // }
    return (
        <section id='festival'>
            <div className="festival">
                <div className='festival__head'>
                    <h1 className='festival__head__title'>Festival</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        festivalItem.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!festivalItem.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Festivals;