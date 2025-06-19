import { useEffect, useState } from 'react'
import axios from "./api/axiosConfig"

function App() {
  const getProduct = async () => {
    try {
      const res = await axios.get('products');
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getProduct()
  })
}

export default App;
