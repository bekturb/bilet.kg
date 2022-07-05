import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../Services/redux/Actions/action";
import Hero from "../../Components/HeroTitle/HeroTitle";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import './Kids.scss'


const Kids = () => {

    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)

    const {id: userId} = useParams()
    console.log(userId)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const kidsItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(kidsItems)

    // if (kidsItems.length === 0){
    //     return <EmptyItems/>
    // }
    return (
        <section id='kids'>
            <div className="kids">
                <div className='kids__head'>
                    <h1 className='kids__head__title'>Kids</h1>
                    <Hero/>
                </div>
                <div className="row">
                    {
                        kidsItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                    {!allItems.length &&  <Loading cards={6}/> }
                </div>
            </div>
        </section>
    );
};

export default Kids;