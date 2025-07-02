import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import DetailsProducts from '../pages/admin/DetailsProducts'
import { useSelector } from 'react-redux'
import UserProfile from '../pages/user/UserProfile'
import PageNotFound from '../pages/PageNotFound'
import AuthWrapper from './AuthWrapper'
import Cart from '../pages/Cart'

export const Mainroutes = () => {
    const user = useSelector((state)=> state.user.data)
    // console.log(user);
    
    return (
        <Routes>
            {/* <Route path='/' element={user?<Products/>:<Home/>}></Route> */}
            {/* <Route path='/products' element={<Products/>}></Route> */}
            <Route path='/' element={<Products/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/admin/create-product' element={
                // ! Auth wraper does not working fix it
                // <AuthWrapper>
                    <CreateProduct/>
                // </AuthWrapper>
            }></Route>
            <Route path='/product/:id' element={
                // <AuthWrapper>
                    <DetailsProducts/>
                // </AuthWrapper>
            }></Route>
            <Route path='/cart' element={
                // <AuthWrapper>
                    <Cart/>
                // </AuthWrapper>
            }></Route>
            <Route path='/profile/:id' element={<UserProfile/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    )
}
