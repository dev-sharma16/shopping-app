import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { useNavigate } from 'react-router-dom'

export const Products = () => {
  const products = useSelector((state)=> state.products.data)
  console.log(products);
  
  const navigate = useNavigate()

  const handleClick = (product) => {
    navigate(`/product/${product.id}`);
  }

  return (
    <div className='h-full w-full bg-gray-800'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            category={product.category}
            onClick={()=>handleClick(product)}
          />
        ))}
      </div>      
    </div>
  )
}
