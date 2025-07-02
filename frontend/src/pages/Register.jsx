import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import { asyncRegisterUser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

function Register() {
    const { register, reset, handleSubmit } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const RegisterHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
        console.log(user);
        dispatch(asyncRegisterUser(user));
        navigate('/login');
    } 

    return (
        <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col w-1/2'>
            <input 
                {...register('username')}
                type="text" 
                className='outline-0 border-b p-2 text-2xl'
                placeholder='Username'
            />
            <input 
                {...register('email')}
                type="email" 
                className='outline-0 border-b p-2 text-2xl'
                placeholder='E-mail'
            />
            <input 
                {...register('password')}
                type="password" 
                className='outline-0 border-b p-2 text-2xl'
                placeholder='Password'
            />
            <button 
                className='border-amber-50 border-1 mt-5 text-xl rounded-xl p-1 w-full'
            >
                Register
            </button>
            <p className='mt-2 text-gray-300'>
                Already have a account? <Link to='/login' className='text-gray-100 font-normal hover:underline underline-offset-2'>Login</Link>
            </p>
        </form>
    )
}

export default Register