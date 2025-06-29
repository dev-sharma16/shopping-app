import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import { asyncRegisterUser } from '../../store/actions/userActions'
import { useDispatch } from 'react-redux'
import { asyncCreateProduct } from '../../store/actions/productActions'

function CreateProduct() {
    const { register, reset, handleSubmit } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CreateProductHandler = (product) => {
        product.id = nanoid();
        console.log(product);
        dispatch(asyncCreateProduct(product));
        navigate('/products');
    } 

    return (
        <form onSubmit={handleSubmit(CreateProductHandler)} className='flex flex-col w-1/2'>
            <input 
                {...register('image')}
                type="url" 
                className='outline-0 border-b p-2 text-2xl'
                placeholder='Product Image'
            />
            <input 
                {...register('title')}
                type="text" 
                className='outline-0 border-b p-2 text-2xl'
                placeholder='Title'
            />
            <input 
                {...register('price')}
                type="number" 
                className='outline-0 border-b p-2 text-2xl'
                placeholder='Price'
            />
            <input 
                {...register('category')}
                type="text" 
                className='outline-0 border-b p-2 text-2xl'
                placeholder='Category'
            />
            <textarea 
                {...register('description')}
                className='outline-0 border-b p-2 text-2xl'
                placeholder='Description'
            />
            <button 
                className='border-amber-50 border-1 mt-5 text-xl rounded-xl p-1 w-full'
            >
                Create Product
            </button>
        </form>
    )
}

export default CreateProduct