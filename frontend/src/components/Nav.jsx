import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { asyncLogOutUser } from '../store/actions/userActions'

export const Nav = () => {
    const user = useSelector((state)=> state.user.data)
    console.log(user);
    
    return (
        <nav className='mb-10 flex justify-center items-center gap-x-5 p-10'>
            {user? (
                <>
                    <NavLink to='/'>Home</NavLink>
                    {/* <NavLink to='/products'>Products</NavLink> */}
                    {user.isAdmin ? <NavLink to='/admin/create-product'>Create Product</NavLink> : ""}
                    <NavLink to={'/profile/'+user.id}>Profile</NavLink>
                </>
            ) : (
                <>
                    <NavLink to='/'>Home</NavLink>
                    {/* <NavLink to='/products'>Products</NavLink> */}
                    <NavLink to='/login'>Login</NavLink>
                </>
            )}
        </nav>
    )
}
