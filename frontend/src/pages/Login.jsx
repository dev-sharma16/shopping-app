import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { asyncLoginUser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

export default function Login() {
    const { register, reset, handleSubmit } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const LoginHandler = (user) => {
        console.log(user);
        dispatch(asyncLoginUser(user));
        navigate("/")
    } 

    return (
        <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col w-1/2'>
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
            <button className='border-amber-50 border-1 mt-5 text-xl rounded-xl p-1 w-full'>
                Login
            </button>
            <p className='mt-2 text-gray-300'>
                Don't have a account? <Link to='/register' className='text-gray-100 font-normal hover:underline underline-offset-2'>Register</Link>
            </p>
        </form>
    )
}
