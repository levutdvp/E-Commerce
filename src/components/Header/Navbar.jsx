import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../slice/UserLoginSlice';
import { useDispatch } from 'react-redux';
const Navbar = () => {
    const dispatch = useDispatch()
    const [MobileMenu, setMobileMenu] = useState(false);
    const handleLogOut = () =>{
    dispatch(logout())
  }

    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className='fa-solid fa-border-all'></span>
                        <h4 className='head-categories'>One Place To Buy Everything</h4>
                    </div>
                    <div className='navlink'>
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/all-products">All Products</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogOut} to="/login">Log Out</Link>
                            </li>
                            {/* <li>
                                <Link to="/registration">Registration</Link>
                            </li> */}
                            <li>
                                <Link to="">Contact Us</Link>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fa fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar