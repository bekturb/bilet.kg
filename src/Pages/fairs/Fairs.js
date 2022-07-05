import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import Hero from "../../Components/HeroTitle/HeroTitle";
import './Fair.scss'

const Fairs = () => {

    const dispatch = useDispatch()


    const {id: userId} = useParams()
    const {allItems} = useSelector(s => s)



    useEffect(() => {
        dispatch(getAllItems(),
        )
    }, [dispatch])

    const fairItems = allItems.filter(el => {
        return el.category === +userId
    })



    // if (fairItems.length === 0){
    //    return <EmptyItems/>
    // }

    return (
        <section id='fair'>
            <div className="fair">
                <div className='fair__head'>
                    <h1 className='fair__head__title'>Fair</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        fairItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!fairItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Fairs;