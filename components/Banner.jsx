'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import userOne from '../public/userone.webp'
import userTwo from '../public/usertwo.webp'
import userThree from '../public/userthree.webp'
import userFour from '../public/userfour.webp'
import userFive from '../public/userfive.webp'
import gold from '../public/gold-star.png'
import bannerImage from '../public/homebanner.webp'

const userList = [userOne,userTwo,userThree,userFour,userFive]
const item = {
    initial:{
        opacity:0,
        y:200
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            // ease:[0.6 , 0.01, -0.05, 0.95],
            duration:1
        }
    }
}

const Banner = () => {

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-start flex-col pt-8">
            <div className="w-[90%] mx-auto flex flex-col flex-nowrap items-center">
                <motion.h2
                    variants={item}
                    initial='initial'
                    animate='animate'
                className="px-4 py-2 bg-[#f1f2f4] rounded-full font-bold">An other way to imagine time</motion.h2>
                <motion.p variants={item}
                    initial='initial'
                    animate='animate' className="pt-3 font-extrabold text-[32px] leading-[38px] flex flex-col items-center">
                    <span>Your new favorite</span>
                    <span>calendar 🗓️ app</span>
                </motion.p>
                <motion.p variants={item}
                    initial='initial'
                    animate='animate' className="flex flex-col items-center font-medium text-xl leading-8 pt-10 text-gray-500">
                    <span>
                    Here you should explain how cool your app is. Remember,
                    </span>
                    <span>
                    focus on the benefits for your users, not on the features. 
                    </span> 
                </motion.p>
                <motion.div variants={item}
                    initial='initial'
                    animate='animate' className="pt-8">
                     <button className="px-8 py-4 bg-[#2e2e2e] rounded-xl text-white font-bold ml-2">Get started,it&apos;s free</button>
                     <p className="text-xs font-medium pt-2 text-[#6b6b78]">Free 14 days trials,no credit card needed</p>    
                </motion.div> 
                <motion.div  variants={item}
                    initial='initial'
                    animate='animate' className='flex flex-col  md:flex-row space-x-3 mt-7'>
                    <div className='flex -space-x-4 overflow-hidden'>
                    {userList.map(src => (
                        <div className='w-12 h-12 border-2 rounded-full flex justify-center items-center'>
                            <Image src={src} className=' rounded-full' key={src} alt='user' />
                        </div>
                    ))} 
                    </div>
                    <div className=' flex flex-col'>

                    <div className='flex items-center'>
                        {[...Array(5)].map(i => (
                            <Image src={gold} className='w-10 h-10' key={i} alt='star' />
                            ))}
                        <span className='font-medium text-lg'>5.0</span>
                    </div>
                    <div>
                        <p className='font-medium leading-6'>From 200+ happy users</p>
                    </div>
                        </div>
                </motion.div>  
                <motion.div  variants={item}
                    initial='initial'
                    animate='animate' className='md:mt-14'>
                     <Image src={bannerImage} className='w-[95%] md:w-[80%] mx-auto' />
                </motion.div> 
            </div>
        </div>
    )
}

export default Banner