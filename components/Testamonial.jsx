'use client'

import Image from "next/image"
import userOne from '../public/userone.webp'
import gold from '../public/gold-star.png'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const Testamonial = () => {

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-start flex-col pt-8 mt-24">
            <div className="home-1 flex flex-col flex-nowrap items-center">
                <h2
                className="px-4 py-2 bg-[#f1f2f4] rounded-full font-bold">They already love our products 😍</h2>
                <p className="pt-3 font-extrabold text-[32px] leading-[38px]">
                    See what our users say about us
                </p>
            </div>
            <>
                <TestamonialCard minutes={0} />
                <TestamonialCard minutes={3} />
                <TestamonialCard minutes={5} />
            </>
        </div>
    )
}

export default Testamonial


const TestamonialCard = ({minutes}) => {

    return (
        <Marquee className="marquee-container" autoFill={true} pauseOnHover={true} direction="right" delay={minutes}>
              {[...Array(5)].map(i => (
                    <div className="bg-[#fefefe] flex flex-col justify-between py-2 px-3 w-[550px] space-y-3 mx-5">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-x-3">
            
                            <Image src={userOne} />
                            <h3 className="text-base font-bold leading-5">“The best time manager app”</h3>
                            </div>
                            <div className='flex items-center'>
                                {[...Array(5)].map(i => (
                                    <Image src={gold} className='w-5 h-5' />
                                ))}
                            </div>
                        </div>
                        <p className="text-[#6b6b78] text-base leading-6 font-normal">I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.</p>
                        <div className="flex justify-between items-center">
                            <h2 className="text-[#2d2d2d] text-sm leading-5 font-bold">Adam Moore</h2>
                            <p className="text-[#6b6b78] text-sm leading-5 font-normal">Entrepreneur</p>
                        </div>
                    </div>
              
              ))}
        </Marquee>
    )
}