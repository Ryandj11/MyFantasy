import React, { useState } from 'react';
import { MdAccountBox, MdEmail, MdLockPerson } from "react-icons/md";
import './Signup.css';



const Login = () => {
    const [formData, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div className ='body'>
            <section>
            <form onSubmit={handleSubmit}>
                <h1 className='text-4xl mb-2 text-center'>Log In</h1>
                <div className='inputbox'>
                    <MdAccountBox className ='icon'/>
                    <input className='input'
                        type='text' 
                        name='name' 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <label className='label' htmlFor='name'>Name</label>
                </div>
                <div className='inputbox'>
                    <MdEmail className ='icon'/>
                    <input className='input'
                        type='email' 
                        name='email' 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <label className='label' htmlFor='email'>Email</label>
                </div>
                <div className='inputbox'>
                    <MdLockPerson className ='icon'/>
                    <input className='input'
                        type='password' 
                        name='password' 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    <label className='label mb-1' htmlFor='password'>Password</label>
                </div>
                <button className ='button mt-4 mb-4' type='submit'>Login In</button>
            </form>
            </section>
        </div>
        
    );
};

export default Login;
