import { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//? REMEMBER when you use SUSPENSE Lazy load that component
const ProductCard = lazy (() => import('../components/ProductCard')) 
import { useNavigate } from 'react-router-dom'
import { asyncUpdateUser } from '../store/actions/userActions'
import axios from '../api/axiosConfig';
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadLazyProducts } from '../store/reducers/productsSlice'

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const products = useSelector((state)=> state.products.data)
  // console.log(products);

  // const [products, setProducts] = useState([]);
  // ? rather then use normal state we use new LAZYLoad function created in the store for saving the data to redux store in units of 6 because of lazy loading the data
  const {data: products} = useSelector((state)=> state.products);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async() => {
    try {
      // ? added lazy loading for product card comp using INFINITY SCROLL
      const {data} = await axios.get(`/products?_start=${products.length}&_limit=6`)
      if (data.length < 1) {
        setHasMore(false)
      }else{
        setHasMore(true)
        // setProducts((prev)=> [...prev,...data]);
        dispatch(loadLazyProducts(data));
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[])
  
  const user = useSelector((state) => state.user.data)
  // console.log(user);
  
  const handleClick = (product) => {
    navigate(`/product/${product.id}`);
  }

  const cartHandler = (product,user) => {
    const copyUser = {...user, cart: [...user.cart]} //? Deep copy and shalow copy concept
    // console.log(copyUser);
    const x = user.cart.findIndex((c)=> c?.product?.id == product.id)
    console.log(x);

    //? FINDINDEX retrun -1 if it don't find any value and retrun the index if it find the value
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
      <div>
        <InfiniteScroll 
          dataLength={products?.length}
          hasMore={hasMore}
          next={fetchProducts}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
            <Suspense fallback={
              <h1 className='text-center text-5xl text-yellow-500'>
                LOADING.....
              </h1>
            }>
              {products?.map((product, index) => (
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
            </Suspense>
          </div>
        </InfiniteScroll>
      </div>      
    </div>
  )
}

export default Products;