import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { asyncLogOutUser } from '../store/actions/userActions'

export const Nav = () => {
    const user = useSelector((state)=> state.user.data)
    console.log(user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const LougOutHandler = () => {
        dispatch(asyncLogOutUser());
        navigate("/login");
    }
    
    return (
        <nav className='mb-10 flex justify-center items-center gap-x-5 p-10'>
            {user? (
                <>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    {user.isAdmin ? <NavLink to='/admin/create-product'>Create Product</NavLink> : ""}
                    <button 
                        onClick={LougOutHandler}
                        className="transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 px-2 py-1 rounded"
                    >
                        LogOut
                    </button>
                </>
            ) : (
                <>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </>
            )}
        </nav>
    )
}
