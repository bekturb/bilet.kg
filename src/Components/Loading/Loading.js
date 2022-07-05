import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = ({cards}) => {
    return (
        Array(cards).fill(0).map((item, idx) => (
            <div key={idx} className='skeleton-col'
                 style={{
                     margin: "10px 30px",
                     width: "257px",
                     height: "483px",

                     background: "#FFFFFF",
                     boxShadow:"-4px -4px 17px rgba(170, 170, 170, 0.17), 4px 4px 17px rgba(170, 170, 170, 0.17)",
                     borderRadius: "16px",
                 }}>
                <div className='skeleton-items'>
                    <Skeleton   style={{
                        width: '257px',
                        height: '346px',

                        background: 'rgba(121, 121, 121, 0.2)',
                        borderRadius: '14px',
                    }}/>
                    <div className='skeleton-info'>
                        <Skeleton   style={{
                            width: "225px",
                            height: "27px",
                            margin: "10px 0",
                            background: "#D9D9D9",
                            borderRadius: "6px",
                        }}/>
                    </div>
                    <div className='skeleton-img'>
                        <Skeleton   style={{
                            width: "80%",
                            height: "0px",
                            border: "1px dashed #7E7E7E",
                        }}/>
                    </div>
                    <div className='skeleton-img'>
                        <Skeleton   style={{
                            width: "198px",
                            height: "14px",

                            background: "#D9D9D9",
                            borderRadius: "3px",
                        }}/>
                    </div>
                    <div className='skeleton-img'>
                        <Skeleton   style={{
                            width: "198px",
                            height: "14px",
                            margin: "10px 0",

                            background: "#D9D9D9",
                            borderRadius: "3px",
                        }}/>
                    </div>
                </div>
            </div>
        ))
    );
};

export default Loading;