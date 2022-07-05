import React from 'react';
import {useSelector} from "react-redux";
import './SingleDetailPage.scss'
import SingleDetailPageCart from "./SingleDetailPageCart";
import EmptyItems from "../../Components/EmptyItem/EmptyItems";

const SingleDetailPages = () => {

    const {singleItem} = useSelector(s => s)
    console.log(singleItem)


    if (singleItem.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='single'>
            <div className="container">
                {
                    singleItem.map(el => (
                        <SingleDetailPageCart key={el.id} el={el}/>

                    ))
                }
            </div>
        </section>
    );
};

export default SingleDetailPages;