import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { Products } from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import DetailsProducts from '../pages/admin/DetailsProducts'

export const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/admin/create-product' element={<CreateProduct/>}></Route>
            <Route path='/product/:id' element={<DetailsProducts/>}></Route>
        </Routes>
    )
}
