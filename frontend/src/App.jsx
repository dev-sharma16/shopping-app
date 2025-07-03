import { useEffect, useState } from 'react'
import axios from "./api/axiosConfig"
import { Mainroutes } from './routes/Mainroutes';
import { Nav } from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCurrentUser } from './store/actions/userActions';
import { asyncLoadProducts } from './store/actions/productActions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user.data);
  // const products = useSelector((state)=> state.products.data)
  // console.log(user);
  // console.log(products);
  
  useEffect(() => {
    if (!user) {
      dispatch(asyncCurrentUser());
    }
    // if (!products || products.length === 0) {
    //   dispatch(asyncLoadProducts());
    // }
  }, []);

  return(
    <div className="overflow-y-hidden px-[10%] text-white font-thin min-w-full min-h-screen bg-gray-800 pb-15">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App;
