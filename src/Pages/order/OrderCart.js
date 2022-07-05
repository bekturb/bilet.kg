import React from 'react';
import PlaceRow1 from "../../Components/TheatrePlaces/PlaceRow1";
import PlaceRow2 from "../../Components/TheatrePlaces/PlaceRow2";
import PlaceRow3 from "../../Components/TheatrePlaces/PlaceRow3";
import PlaceRow4 from "../../Components/TheatrePlaces/PlaceRow4";
import PlaceRow5 from "../../Components/TheatrePlaces/PlaceRow5";
import PlaceRow6 from "../../Components/TheatrePlaces/PlaceRow6";


const OrderCart = ({el,id} ) => {


    return (
        <div className='order__cart--places'>
            <PlaceRow1 id={id} el={el}/>
            <PlaceRow2 id={id} el={el}/>
            <PlaceRow3 id={id} el={el}/>
            <PlaceRow4 id={id} el={el}/>
            <PlaceRow5 id={id} el={el}/>
            <PlaceRow6 id={id} el={el}/>
        </div>
    );
};

export default OrderCart;