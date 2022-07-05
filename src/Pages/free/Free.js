import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import Hero from "../../Components/HeroTitle/HeroTitle";
import {getAllItems} from "../../Services/redux/Actions/action";
import './Free.scss'
import EmptyItems from "../../Components/EmptyItem/EmptyItems";

const Free = () => {

    const {id} = useParams()
    console.log(id)

    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const categories = allItems.filter(el => {
        return el.category === +id
    })
    console.log(categories)

    // if (categories.length === 0){
    //     return <EmptyItems/>
    // }

    return (
        <section id='free'>
            <div className="free">
                <div className='free__head'>
                    <h1 className='free__head__title'>Free</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {categories.length > 0 ? (
                        <div>
                            { categories.length ? (
                                <div>
                                    {
                                        categories.map(el => (
                                            <Card key={el.id} el={el}/>
                                        ))
                                    }
                                </div>
                            ) : (
                                !categories.length &&  <Loading cards={6}/>
                            )}

                        </div>
                    ) : (
                       <EmptyItems/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Free;