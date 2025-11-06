import React from 'react'
import Navlink from './Navlink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'motion/react';
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
            <nav className='h-[70px] w-[95vw] items-center flex justify-between px-5 rounded-3xl bg-black/40 backdrop-blur-md shadow-lg transition-all duration-300'>
                <div className="logo">
                    <img src="public/cropped_circle_image.png" className='w-15' alt="" />
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
                        <motion.div whileHover={{scale:1.15}}><FontAwesomeIcon icon={faDiscord} className="text-2xl" /></motion.div>
                        <motion.div whileHover={{scale:1.15}}><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></motion.div>
                        <motion.div whileHover={{scale:1.15}}><FontAwesomeIcon icon={faYoutube} className="text-2xl" /></motion.div>
                        <motion.div whileHover={{scale:1.15}}><FontAwesomeIcon icon={faFacebook} className="text-2xl" /></motion.div>
                    </div>
                    <div className="button text-white flex gap-3">
                        <motion.button whileHover={{scale:1.05, backgroundColor:"rgb(8, 145, 178)"}} className='bg-purple-500 px-8 py-3 border border-black rounded-2xl'>Play Now</motion.button>
                    </div>
                    <div className="cart text-white flex justify-center h-full w-[30px] items-center"><ShoppingCart /></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
