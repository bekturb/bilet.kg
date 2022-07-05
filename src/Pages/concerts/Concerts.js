import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import EmptyItems from "../../Components/EmptyItem/EmptyItems";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import Hero from "../../Components/HeroTitle/HeroTitle";
import './Concerts.scss'

const Concerts = () => {

    const {id:userId} = useParams()
    console.log(userId)
    const dispatch = useDispatch()

    const {allItems} = useSelector(s => s)
    console.log(allItems)



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const ConcertItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(ConcertItems)

    // if (ConcertItems.length === 0){
    //     return <EmptyItems/>
    // }

    return (
        <section id='concert'>
            <div className="concert">
                <div className='concert__head'>
                    <h1 className='concert__head__title'>Concerts</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        ConcertItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!allItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Concerts;