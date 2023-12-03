import React from 'react';
import Header from '../../components/Header/Header';
import Newarrivals from "../../components/Newarrivals/Newarrivals"
import Footer from "../../components/Footer/Footer";
import Discount from '../../components/Discount/Discount';
import Mainpage from "../../components/Mainpage/Mainpage";
import Flashdeals from "../../components/FlashDeals/Flashdeals";
import Shop from "../../components/Shop/Shop";
import Features from "../../components/Features/Features";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Homepage = ({productItems, addToCart , cartItems, shopItems }) => {
  const userLogin = useSelector(state => state.userLogin)
  const navigate = useNavigate()
  useEffect(() => {
    if (!userLogin?.isLoginSuccess) {
      navigate('/login')
    }
  }, [userLogin?.isLoginSuccess])
  return (
    <>
   <Header cartItems={cartItems}/>
   <Mainpage />
   <Flashdeals productItems={productItems} addToCart={addToCart} />
   <Newarrivals />
   <Discount />
   <Shop shopItems={shopItems} addToCart={addToCart} />
   <Features />
   <Footer />
    </>
  )
}

export default Homepage