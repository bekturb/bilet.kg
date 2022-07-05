import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Hero from "../../Components/HeroTitle/HeroTitle";
import EmptyItems from "../../Components/EmptyItem/EmptyItems";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";
import {getAllItems} from "../../Services/redux/Actions/action";
import './Exhibition.scss'


const Exhibitions = () => {

    const {allItems} = useSelector(s => s)

    const {id: userId} = useParams()
    console.log(userId)

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const exhibitionItem = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(exhibitionItem)

    if (exhibitionItem.length === 0){
        return <EmptyItems/>
    }

    return (

        <section id='exhibition'>
            <div className="exhibition">
                <div className='exhibition__head'>
                    <h1 className='exhibition__head__title'>Exhibition</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        exhibitionItem.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!allItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>

    );
};

export default Exhibitions;