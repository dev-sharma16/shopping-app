import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { asyncDeleteProduct, asyncUpdateProduct } from '../../store/actions/productActions'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function DetailsProducts() {
  const { id } = useParams()
  console.log(id);

  const products = useSelector((state)=>state.products.data);
  const product = products?.find((product) => product.id == id);
  console.log(product);

  const user = useSelector((state)=>state.user.data)
  console.log(user);
  

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description
    }
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UpdateProductHandler = (product) => {
    console.log(product);
    dispatch(asyncUpdateProduct(id,product));
  } 

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id))
    navigate('/');
  }
  
  return product ? (
    <>
      <div className='w-full flex'>
        <img className='w-1/2 h-1/2' src={product.image} alt="" />
        <div className="px-3 w-1/2 h-1/2">
          <h1 className='font-thin text-5xl'>{product.title}</h1>
          <h2 className='mb-5 text-2xl text-green-400'>₹{product.price}</h2>
          <p className='mb-5'>{product.description}</p>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {user.isAdmin ?
        <form onSubmit={handleSubmit(UpdateProductHandler)} className='flex flex-col '>
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
          <div className='flex gap-5'>
            <button 
                className='border-amber-50 border-1 mt-5 text-xl rounded-xl p-1 w-full'
            >
                Update Product
            </button>
            <button 
                onClick={DeleteHandler}
                className='border-amber-50 border-1 mt-5 text-xl rounded-xl p-1 w-full'
            >
                Delete Product
            </button>
          </div>
        </form> 
      : ""}      
    </>
  ) : <div>loading...</div>
}

export default DetailsProducts