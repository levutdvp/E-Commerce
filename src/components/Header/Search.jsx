import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Search = ({ cartItems }) => {

    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
    // const [searchQuery, setSearchQuery] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    // const handleSearchChange = (e) => {
    //     const query = e.target.value;
    //     setSearchQuery(query);
    //     const filteredResults = cartItems.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    //     setSearchResults(filteredResults);
    //     console.log(filteredResults);
    // };
    return (
        <>
            <section className='search'>
                <div className="container c_flex">
                    <div className="logo width">
                        <Link to="/">
                            <img src="assets\main-logo\main-logo.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='search-box f_flex'>
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder="Search here..." 
                       />
                        <span>All Category</span>
                    </div>
                     {/* <div className="search-results">
                        {searchResults.map((result, index) => (
                            <div key={index}>{result.name}</div>
                        ))}
                    </div> */}

                    <div className="icon f_flex width">
                        <Link to="">
                            <i className='fa fa-user icon-circle'></i>
                        </Link>
                        <div className='cart'>
                            <Link to="/cart">
                                <i className='fa fa-shopping-bag icon-circle'></i>
                                <span>{cartItems.length === 0 ? 0 : cartItems.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Search