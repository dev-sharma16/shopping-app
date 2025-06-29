import { useEffect, useState } from 'react'
import axios from "./api/axiosConfig"
import { Mainroutes } from './routes/Mainroutes';
import { Nav } from './components/Nav';
import { useDispatch } from 'react-redux';
import { asyncCurrentUser } from './store/actions/userActions';
import { asyncLoadProducts } from './store/actions/productActions';

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  })

  return(
    <div className="px-[10%] text-white font-thin min-w-full min-h-screen bg-gray-800 pb-15">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App;
