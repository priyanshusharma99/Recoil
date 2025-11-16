import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'motion/react';
import {
    faDiscord,
    faInstagram,
    faYoutube,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-[65vh] bg-black font-[Arial]'>
            <div className='w-full h-20 bg-gray-800 flex justify-center items-center font-bold text-3xl text-white'>
                <h1 className='font-[Arial] font-extrabold'>Download and Play Now</h1>
            </div>
            <div className='flex flex-col gap-8 p-10'>
                <div className="social text-white flex gap-7 w-full justify-center">
                    <motion.a href='https://discord.com/' target='_blank' whileHover={{ scale: 1.15 }}><FontAwesomeIcon icon={faDiscord} className="text-2xl" /></motion.a>
                    <motion.a href='https://instagram.com/' target='_blank' whileHover={{ scale: 1.15 }}><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></motion.a>
                    <motion.a href='https://youtube.com/' target='_blank' whileHover={{ scale: 1.15 }}><FontAwesomeIcon icon={faYoutube} className="text-2xl" /></motion.a>
                    <motion.a href='https://facebook.com/' target='_blank' whileHover={{ scale: 1.15 }}><FontAwesomeIcon icon={faFacebook} className="text-2xl" /></motion.a>
                </div>
                <div className="logo w-full flex justify-center">
                    <img src="public/cropped_circle_image.png" className='w-20' alt="" />
                </div>
                <div className='w-full flex justify-center '>
                    <div className="text-gray-500 w-[40vw] text-center">
                        <p>© 2020-2025 Priyanshu Games, Inc. Priyanshu GAMES, Recoil and any associated logos are trademarks, service marks, and/or registered trademarks of Priyanshu Games, Inc.</p>
                    </div>
                </div>
                <div className="but text-white w-full flex justify-center gap-10">
                    <motion.button
                    onClick={()=>navigate("/Privacy")}
                    whileHover={{
                        backgroundColor:"cyan",
                        color:"black"
                    }}
                    transition={{
                        duration:1
                    }}
                     className='px-5 py-2 rounded-2xl'>
                        Privacy Note
                    </motion.button>
                    <motion.button
                    whileHover={{
                        backgroundColor:"cyan",
                        color:"black"
                    }}
                    transition={{
                        duration:1
                    }}
                    onClick={()=>navigate("/TermsOfService")}
                     className='px-5 py-2 rounded-2xl'>
                        Terms of Service
                    </motion.button>
                    <motion.button
                    whileHover={{
                        backgroundColor:"cyan",
                        color:"black"
                    }}
                    transition={{
                        duration:1
                    }}
                    onClick={()=>navigate("/CompanyInfo")}
                     className='px-5 py-2 rounded-2xl'>
                        Company Information
                    </motion.button>
                    <motion.button
                    whileHover={{
                        backgroundColor:"cyan",
                        color:"black"
                    }}
                    transition={{
                        duration:1
                    }}
                     className='px-5 py-2 rounded-2xl'>
                        Cookie Preferences
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Footer
