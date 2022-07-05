import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../Services/redux/Actions/action";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import './Movie.scss'


const Movie = () => {

    const {allItems} = useSelector(s => s)
    const dispatch = useDispatch()

    const {id: userId} = useParams()
    console.log(userId)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const movieItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(movieItems)

    // if (movieItems.length === 0){
    //     return <EmptyItems/>
    // }
    return (
        <section id='movie'>
            <div className="movie">
                <div className='movie__head'>
                    <h1 className='movie__head__title'>Movie</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        movieItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!movieItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Movie;