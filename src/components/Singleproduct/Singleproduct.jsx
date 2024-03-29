import {React, useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './singleproduct.css';
import { apiProduct } from '../../axios-instance';
const Singleproduct = ({ addToCart }) => {
    const [allProduct, setAllProduct] = useState([])
    async function getAllProduct(){
    const response = await apiProduct.get('/allProduct')
    setAllProduct(response.data)
  } 
  useEffect(() => {
    getAllProduct();
  }, [])
    let id = useParams();
    return (
        <>
            {
                allProduct.map((product, index) => {
                    if (product.id == id.id) {
                        return (
                            <div key={index}>
                                <section className='single-product'>
                                    <div className='heading-prod'>{product.name}</div>
                                    <div className='f_flex'>
                                        <div className='img'>
                                            <img src={product.img} alt="" />
                                            <div className='price'>{product.price}.00$</div>
                                        </div>
                                        <div className='description'>{product.desc}
                                            <div className="rate-single">
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <div>Currently it's {product.discount}% Off but not for long</div>
                                            </div>
                                    </div>
                                    <div className='add f_flex'><button className='add-to-cart' onClick={() => addToCart(product)}>Add To Cart</button></div>

                                </section>
                            </div>
                        )
                    }

                })
            }
        </>
    )
}
export default Singleproduct;

