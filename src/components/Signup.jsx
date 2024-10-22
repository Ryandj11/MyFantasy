import React, { useState } from 'react';
import { MdEmail, MdLockPerson } from "react-icons/md"; // Removed MdAccountBox import
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setForm] = useState({
        email: '',
        password: '', 
    });


    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify the content type
                },
                body: JSON.stringify(formData), // Convert the form data to JSON
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            console.log('Signup successful:', data);
            navigate('/PlayerInput')
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className='body'>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-4xl mb-2 text-center'>Sign Up</h1>
                    <div className='inputbox'>
                        <MdEmail className='icon' />
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
                        <MdLockPerson className='icon' />
                        <input className='input'
                            type='password' 
                            name='password' 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                        <label className='label mb-1' htmlFor='password'>Password</label>
                    </div>
                    <button className='button mt-4 mb-4' type='submit'>Sign up</button>
                    <div className='register'>
                        <p>Already have an account? <Link className='underline' to='/Login'>Log in</Link></p>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Signup;
