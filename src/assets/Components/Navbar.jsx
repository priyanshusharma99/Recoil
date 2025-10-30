import React from 'react'
import Navlink from './Navlink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
            <nav className='h-[100px] items-center flex justify-between bg-black px-5'>
                <div className="logo">
                    <img src="public/cropped_circle_image.png" className='w-25' alt="" />
                </div>
                <div className="navlinks flex gap-10 text-white">
                    <Navlink name="Home" />
                    <Navlink name="News" />
                    <Navlink name="Game Info" />
                    <Navlink name="Media" />
                    <Navlink name="Power League" />
                    <Navlink name="Esports+" />
                    <Navlink name="Store" />
                </div>

                <div className="right flex gap-5 h-full items-center justify-between">
                    <div className="social text-white flex gap-6">
                        <FontAwesomeIcon icon={faDiscord} className="text-2xl" />
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                    </div>
                    <div className="button text-white flex h-full">
                        <button className='bg-purple-500 px-12 border border-black'>Play Now</button>
                        <button className='bg-purple-500 px-12 border border-black'>Download</button>
                    </div>
                    <div className="cart text-white flex justify-center h-full w-[30px] items-center"><ShoppingCart /></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
