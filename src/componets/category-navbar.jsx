import React from 'react';
import { FaLocationDot, FaMagnifyingGlass } from 'react-icons/fa6';
import { FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';


export default function CategoryNavbar() {

    return (
        <div className="header__top">
            <img src="/hifilogo.jpg" alt="logo" />
            <div className="header_div">
                <form action="newsletter.html" method="get">
                    <label className="form__label" htmlFor="email"></label>
                    <input
                        className="navform"
                        type="text"
                        id="email"
                        name="search"
                        placeholder="Search entire store here"
                    />  <FaMagnifyingGlass
                        className="magnify header_div_items" />

                </form>
                <FaUser className="fa-solid fa-user" />
                <a className="header_div_items" href="">account</a>
                <FaShoppingCart className="fa-solid fa-cart-shopping" />
                <a className="header_div_items" href="cart.html">cart</a>
                <FaLocationDot className="fa-solid fa-location-dot header_div_items" />
                <FaPhone className="fa-solid fa-location-dot header_div_items" />
                <IoMdMail className="fa-solid fa-location-dot header_div_items" />
            </div>
        </div>
    )
}


