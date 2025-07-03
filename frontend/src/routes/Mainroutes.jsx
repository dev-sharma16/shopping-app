import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
const Products = lazy(()=> import('../pages/products')) 
const Login = lazy(()=> import('../pages/Login')) 
const Register = lazy(()=> import('../pages/Register')) 
const CreateProduct = lazy(()=> import('../pages/admin/CreateProduct'))
const DetailsProducts = lazy(()=> import('../pages/admin/DetailsProducts')) 
import { useSelector } from 'react-redux'
const UserProfile = lazy(()=> import('../pages/user/UserProfile')) 
const PageNotFound = lazy(()=> import('../pages/PageNotFound')) 
const AuthWrapper = lazy(()=> import('./AuthWrapper')) 
const Cart = lazy(()=> import('../pages/Cart')) 
const UnAuthWrapper = lazy(()=> import('../routes/UnAuthWrapper'))

export const Mainroutes = () => {
    // const user = useSelector((state)=> state.user.data)
    // console.log(user);
    
    return (
        <Routes>
            {/* <Route path='/' element={user?<Products/>:<Home/>}></Route> */}
            {/* <Route path='/products' element={<Products/>}></Route> */}
            <Route path='/' element={<Products/>}></Route>

            //? protected routes from logined user
            <Route path='/login' element={
                <UnAuthWrapper>
                    <Login/>
                </UnAuthWrapper>
            }></Route>
            <Route path='/register' element={
                <UnAuthWrapper>
                    <Register/>
                </UnAuthWrapper>
            }></Route>

            //? protected routes from non-logined user
            <Route path='/admin/create-product' element={
                <AuthWrapper>
                    <CreateProduct/>
                </AuthWrapper>
            }></Route>
            <Route path='/product/:id' element={
                <AuthWrapper>
                    <DetailsProducts/>
                </AuthWrapper>
            }></Route>
            <Route path='/cart' element={
                <AuthWrapper>
                    <Cart/>
                </AuthWrapper>
            }></Route>
            <Route path='/profile/:id' element={<UserProfile/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    )
}
