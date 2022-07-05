import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import EmptyItems from "../../Components/EmptyItem/EmptyItems";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";
import './Sport.scss'



const Sport = () => {


    const {allItems} = useSelector(s => s)
    console.log(allItems)
    const dispatch = useDispatch()

    const {id:userId} = useParams()
    console.log(userId)




    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const sportItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(sportItems)

    if (sportItems.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='sport'>
            <div className="sport">
                <div className='sport__head'>
                    <h1 className='sport__head__title'>Sport</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        sportItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!sportItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Sport;