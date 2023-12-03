import React , {useState} from "react";
import AllRoutes from "./allroutes/AllRoutes";
import FlashDealsData from "./components/FlashDeals/flashDealsData";
import ShopData from "./components/Shop/shopData";
import AllProductsData from "./components/Allproducts/allProductsData";
import './App.css';
import { useEffect } from "react";
import store from "./store";
import { loginSuccess } from "./components/slice/UserLoginSlice";
function App() {

  const {productItems} = FlashDealsData;
  const {shopItems} = ShopData;
  const {allProductsData} = AllProductsData;
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...productExists, qty: productExists.qty + 1 } : item)))
    } else{
      setCartItems([...cartItems, {...product,qty:1}])
    }
  }
 
  const deleteFromCart = (product) =>{
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      setCartItems(cartItems.filter((item) => (item.id !== product.id)))
    } else{
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...productExists, qty: productExists.qty - 1 } : item)))
    }

  }

 const checkOut = (cartItems) =>{
      if(cartItems.length <= 0){
        alert("Add something to the cart first to checkout");
      } else {

        for(let i=0; i<cartItems.length; i++){
          cartItems.splice(0, cartItems.length);
        }
        setCartItems(cartItems.map((item) => item))
        alert("Thanks for shopping with us, come back soon again");
      }
  } 
  
  const removeFromCart =(product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  }
    useEffect(()=>{
    const userLocalStorage = localStorage.getItem('name');
    const passWordLocalStorage = localStorage.getItem('password');
    const idLocalStorage = localStorage.getItem('id');
    if (userLocalStorage) {
      store.dispatch(loginSuccess({
        name: userLocalStorage,
        password: passWordLocalStorage,
        id: idLocalStorage
      }))
    }
  },[]) 
  return (
    
    <>
    <AllRoutes removeFromCart={removeFromCart} productItems={productItems} cartItems={cartItems} addToCart={addToCart} shopItems={shopItems} deleteFromCart={deleteFromCart}  allProductsData={allProductsData} checkOut={checkOut}/>
    </>
  )
}

export default App;
