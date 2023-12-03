'use client'

import { useState } from "react"
import { motion } from "framer-motion"
const Pricing = () => {

    const [active,setActive] = useState(1)

    return (
        <div className="min-h-[calc(100vh-80px)]  flex items-center justify-start flex-col pt-8 mt-4 lg:mt-24">
            <div className="home-1 flex flex-col flex-nowrap items-center">
                <h2
                className="px-4 py-2 bg-[#f1f2f4] rounded-full font-bold">Pricing and plans 💰</h2>
                <p className="pt-3 font-extrabold text-[32px] leading-[38px]">
                Find the best plan for your needs
                </p>
            </div>
            <div className="mt-7 flex">
                <div className="mb-4 flex space-x-4 p-2 bg-[#f1f2f4] w-[300px] shadow-md rounded-full">
                    <motion.button
                        onClick={()=>setActive(1)}
                        className={`text-center ${active === 1 && 'bg-white shadow-lg'}  rounded-full font-normal text-lg flex-1 py-2 px-4  focus:outline-none focus:shadow-outline-blue transition-all duration-300`}
                        >Monthly</motion.button>
                    <motion.button
                    onClick={()=>setActive(2)}
                        className={`text-center ${active === 2 && 'bg-white shadow-lg'}  rounded-full font-normal text-lg flex-1 py-2 px-4  focus:outline-none focus:shadow-outline-blue transition-all duration-300`}>Annually
                        </motion.button>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
                <PriceCard price={0} high={'Free'} />
                <PriceCard price={19} high={'Starter'} />
                <PriceCard price={49} high={'PRO'} />
            </div>
        </div>
    )
}

export default Pricing


const PriceCard = ({price,high}) => {

    return (
        <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0,rotateX:360}} className="bg-[#fefefe] p-5 rounded-2xl flex flex-col gap-y-7 shadow-lg">
            <div className="flex flex-col items-start">
                <h4 className="px-8 py-2 bg-[#f1f2f4] rounded-full font-bold">{high}</h4>
                <p className="font-medium text-base text-[#6b6b78] mt-3">So you can see how incredible our tool is.</p>
            </div>
            <div className="flex flex-col items-start">
            <h4><span className="text-[56px] leading-[56px] font-extrabold">${price}</span>/mo</h4>
            <p className="mt-2">Free for ever</p>
            </div>
            <div>

                <motion.button
                    className="w-full px-4 py-2 bg-[#2e2e2e] rounded-xl text-white font-bold ml-2"
                    whileHover={{scale:1.1}}>
                        Get started
                </motion.button>
                <p className="text-center text-xs leading-4 font-medium">no credit card needed</p>
            </div>
            <div className="">
                <p> What's included:</p>
                <div className="flex flex-col gap-y-3 mt-2 ml-12 text-base leading-5 font-medium text-[#6b6b78]">

               <span> A cool feature</span>
                <span>A basic feature</span>
                <span>A top feature with limitations</span>
               <span> An incredible feature so useful</span>
               <span> A top feature </span>
                </div>
            </div>
        </motion.div>
    )
}