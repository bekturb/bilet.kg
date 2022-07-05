import React, {useState} from 'react';
import './Register.scss'
import {useDispatch} from "react-redux";
import {getProfile} from "../../Services/redux/Actions/action";

const Register = () => {
    const [profile, setProfile] = useState({})
    const dispatch = useDispatch()
    // const [data, setData] = useState([])

    const handleAddProfile = (e) => {
        setProfile({...profile, [e.target.name]: e.target.value})
    }
    const createProfile = (e) => {
        e.preventDefault()
        dispatch(getProfile(profile))
        setProfile({
            name: '',
            phone: ''
        })
    }
    return (
        <section id='register'>
            <div className="container">
                <div className="register">
                    <h1 className='register--title'>BILET.KG</h1>
                    <form onSubmit={createProfile} className='register--body'>
                        <p className='register--body__subtitle'>Оставьте контакты, и мы свяжемся с вами в ближайшее время.</p>
                        <hr className='register--body__line'/>
                        <input value={profile.name} onChange={handleAddProfile} name='name' type="text"  className='register--body__name' placeholder='  Имя '/> {profile.name ? '' : <span className='register--body__star'>*</span>}
                        <input value={profile.phone} onChange={handleAddProfile} name='phone' type="tel"  className='register--body__phone' placeholder='  Телефон '/> {profile.phone ? '' : <span className='register--body__phoneStar'>*</span>}
                        <button className='register--body__btn'>ОСТАВИТЬ ЗАЯВКУ</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;