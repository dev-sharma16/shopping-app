import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { useNavigate } from 'react-router-dom'
import { asyncUpdateUser } from '../store/actions/userActions'

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products.data)
  // console.log(products);

  const user = useSelector((state) => state.user.data)
  // console.log(user);
  
  const navigate = useNavigate()

  const handleClick = (product) => {
    navigate(`/product/${product.id}`);
  }

  const cartHandler = (product,user) => {

    const copyUser = {...user, cart: [...user.cart]} //? Deep copy and shalow copy concept
    // console.log(copyUser);
    const x = user.cart.findIndex((c)=> c?.product?.id == product.id)
    console.log(x);

    //? FINDINDEX retrun -1 if it don find any value and retrun the index if it find the value
    if(x == -1){
      copyUser.cart.push({ product, quantity: 1})
    } else {
      copyUser.cart[x]= { product, quantity: copyUser.cart[x].quantity+1 };
    }
    console.log(copyUser);
    dispatch(asyncUpdateUser(user.id,copyUser))
  }

  return (
    <div className='h-full w-full bg-gray-800'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            onClick={()=>handleClick(product)}
            onClickCart={()=>cartHandler(product,user)}
          />
        ))}
      </div>      
    </div>
  )
}

export default Products