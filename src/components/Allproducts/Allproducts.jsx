import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import './allproducts.css';
import { apiProduct } from '../../axios-instance';
import { useEffect } from 'react';
const Allproducts = ({ addToCart }) => {
    const [allProduct, setAllProduct] = useState([])
    async function getAllProduct(){
    const response = await apiProduct.get('/allProduct')
    setAllProduct(response.data)
  } 
  useEffect(() => {
    getAllProduct();
  }, [])

    return (
        <>
        <div className="grid3">
            {allProduct.map((product, index) => {
                    return(
                    <div className="box" key={index}>
                        <div className="product mtop">
                            <div className="img">
                                <span className='discount'>{product.discount}% Off</span>
                                <img src={product.img} alt="" />
                            </div>
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <Link to={`/all-products/${product.id}`}>
                                <h5>Click here for more Info</h5>
                                </Link>
                                <div className="rate">
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className="price">
                                    <h4>{product.price}.00$</h4>
                                    <button onClick={() => addToCart(product)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )


    })}
                </div>
                </>
  )
            }

            export default Allproducts