import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import Card from "../../Components/Card/Card";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Loading from "../../Components/Loading/Loading";
import './Music.scss'

const Music = () => {


    const dispatch = useDispatch()


    const {id: userId} = useParams()
    const {allItems} = useSelector(s => s)
    console.log(allItems)



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const musicItems = allItems.filter(el => {
        return el.category === +userId
    })
    // if (musicItems.length === 0){
    //     return <EmptyItems/>
    // }
    return (
        <section id='music'>
            <div className="music">
                <div className='music__head'>
                    <h1 className='music__head__title'>Music</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        musicItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!musicItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Music;