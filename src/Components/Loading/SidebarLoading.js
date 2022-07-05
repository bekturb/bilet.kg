import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SidebarLoading = ({cards}) => {
    return (
        Array(cards).fill(0).map((item, idx) => (
            <div key={idx} className='sidebar__loading'>
                <Skeleton style={{
                    width: "170px",
                    height: "50%",
                    margin: "15px 0",
                    background: "#FFFFFF",
                    boxShadow: "-4px -4px 17px rgba(170, 170, 170, 0.17), 4px 4px 17px rgba(170, 170, 170, 0.17)",
                    borderRadius: "16px",
                }}/>
            </div>
        ))
    );
};

export default SidebarLoading;