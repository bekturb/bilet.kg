import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './Popular.scss'
import {getAllItems} from "../../Services/redux/Actions/action";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";

const Popular = () => {

    const {id:userId} = useParams()
    console.log(userId)
    const dispatch = useDispatch()

    const {allItems} = useSelector(s => s)



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const popularItems = allItems.filter(el => {
        return el.category === +userId
    })

    // if (popularItems.length === 0){
    //     return <EmptyItems/>
    // }
    return (
        <section id='popular'>
            <div className="popular">
                <div className='popular__head'>
                    <h1 className='popular__head__title'>Popular</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        popularItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!popularItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Popular;