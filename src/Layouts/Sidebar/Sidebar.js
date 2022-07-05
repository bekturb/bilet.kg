import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Sidebar.scss'
import {getAdvertising} from "../../Services/redux/Actions/action";
import SideBarCard from "./SidebarCard";
import SidebarLoading from "../../Components/Loading/SidebarLoading";


const Sidebar = ({children}) => {

    const dispatch = useDispatch()
    const {advertising} = useSelector(s => s)


    useEffect(() => {
        setTimeout(async () => {
            dispatch(getAdvertising())
        },2000)
    }, [dispatch])

    return (
        <section id='sidebar'>
            <div className="container">
                <div className="sidebar">
                    {
                        advertising.map(el => (
                            <SideBarCard key={el.id} el={el}/>
                        ))
                    }
                    {!advertising.length && <SidebarLoading cards={12}/>}
                </div>
                <main>{children}</main>
            </div>
        </section>
    );
};

export default Sidebar;