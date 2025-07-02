import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUpdateUser } from '../store/actions/userActions';

export default function Cart() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data)
    console.log(user);
    
    const products = useSelector((state)=> state.products.data);

    const IncreaseHandler = (index, product) => {
        const copyUser = {...user, cart: [...user.cart]} 
        copyUser.cart[index] = { 
            product, 
            quantity: copyUser.cart[index].quantity + 1 
        };
        dispatch(asyncUpdateUser(user.id,copyUser))    
        console.log(copyUser);
    }

    const DecreaseHandler = (index, product) => {
        const copyUser = {...user, cart: [...user.cart]} 
        if(user.cart[index].quantity > 1){
            copyUser.cart[index] = { 
                product,
                quantity: copyUser.cart[index].quantity - 1 
            };
            dispatch(asyncUpdateUser(user.id,copyUser)) 
            console.log(copyUser);
        } else {
            copyUser.cart.splice(index, 1); 
            dispatch(asyncUpdateUser(user.id, copyUser));
        }
    }

    const cartItems = user?.cart?.map((c,index) => {
        
        return (
            <li className='flex items-center justify-between border-2 rounded-lg mb-10 p-2' key={c.product.id}>
                <img 
                    className='w-[13vmax] h-[13vmax] rounded-md'
                    src={c.product.image} 
                    alt="product Image" 
                />
                <span>{c.product.title}</span>
                <span>₹{c.product.price}</span>
                <div>
                <span onClick={()=>IncreaseHandler(index,c.product)} className='text-xl cursor-pointer px-2 rounded-4xl hover:bg-gray-700 transition'>+</span>
                <span className='mx-3 px-3 py-1 rounded bg-gray-700'>{c.quantity}</span>
                <span onClick={()=>DecreaseHandler(index,c.product)} className='text-xl cursor-pointer px-2 rounded-4xl hover:bg-gray-700 transition'>-</span>
                </div>
            </li>
        )
    });
    // console.log(cartItems);

    return <ul>{cartItems}</ul>
}
