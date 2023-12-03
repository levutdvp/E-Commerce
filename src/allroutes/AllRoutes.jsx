import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import '../App.css';
import Cartpage from "../pages/cartpage/Cartpage";
import Homepage from "../pages/homepage/Homepage";
import Registrationpage from "../pages/registrationpage/Registrationpage";
import Allproductspage from "../pages/all-productspage/Allproductspage";
import Singleproductpage from "../pages/product-details/Singleproductpage";
import Loginform from "../components/Loginform/Loginform";
import { Provider } from "react-redux";
import store from "../store";
const AllRoutes = ({ productItems, cartItems, addToCart, shopItems, deleteFromCart, checkOut , removeFromCart, allProductsData}) => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage productItems={productItems} cartItems={cartItems} addToCart={addToCart} shopItems={shopItems} />,
  },
  {
    path: "/cart",
    element: <Cartpage cartItems={cartItems} addToCart={addToCart} deleteFromCart={deleteFromCart} checkOut={checkOut} removeFromCart={removeFromCart} />
  },
  {
    path: "/login",
    element: <Loginform /> 
  },
  {
    path:"/registration",
    element:<Registrationpage cartItems={cartItems} />
  },
  {
    path:'/all-products',
    element: <Allproductspage cartItems={cartItems} allProductsData={allProductsData} addToCart={addToCart}/>
},
{
  path: '/all-products/:id',
  element: <Singleproductpage cartItems={cartItems} allProductsData={allProductsData} addToCart={addToCart}/>
}
]);
  return (
    <>
      
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  )
}

export default AllRoutes;
