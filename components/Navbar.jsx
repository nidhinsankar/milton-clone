'use client';

import { AnimatePresence, motion } from "framer-motion"
import hamburgermenu from '../public/burgermenu.svg'
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)

    return (
        <motion.div
         className="h-20 flex items-center border-b"
         animate={{ y:[50,0], opacity: 1, scale: 1 }}
         transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="flex justify-between items-center w-[80%] mx-auto">

                <h1 className="font-bold text-xl">Milton</h1>
                <div className="hidden lg:flex ">
                    <a href="#" className="mr-2 font-bold text-gray-400 hover:text-gray-600 hover:border-b">Features</a>
                    <a href="#" className="mx-4 font-bold text-gray-400 hover:text-gray-600 hover:border-b">Testamonial</a>
                    <a href="#" className="mr-2 font-bold text-gray-400 hover:text-gray-600 hover:border-b">Pricing</a>
                    <a href="#" className="mx-4 font-bold text-gray-400 hover:text-gray-600 hover:border-b">FAQ&apos;s</a>
                    <a href="#" className="mr-2 font-bold text-gray-400 hover:text-gray-600 hover:border-b">Blog</a>
                </div>
                <div className="hidden lg:block">
                    <motion.button 
                        className="px-4 py-2 bg-[#f1f2f4] rounded-xl font-bold"
                        whileHover={{scale:1.1}}
                    >
                        Log in
                    </motion.button>
                    <motion.button
                    className="px-4 py-2 bg-[#2e2e2e] rounded-xl text-white font-bold ml-2"
                    whileHover={{scale:1.1}}>
                        Get started
                    </motion.button>
                </div>
                <Image src={hamburgermenu} className="w-12 h-12 lg:hidden" onClick={()=>setIsOpen(!isOpen)} />
            </div>
            <AnimatePresence>

            {isOpen && <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.2 }}
             className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-[#fef9f6] mt-4">
                <div className="w-full lg:hidden flex flex-col items-center gap-y-3">
                        <a href="#" className="mr-2 font-bold text-gray-400 hover:text-gray-600 hover:border-b">Features</a>
                        <a href="#" className="mx-4 font-bold text-gray-400 hover:text-gray-600 hover:border-b">Testamonial</a>
                        <a href="#" className="mr-2 font-bold text-gray-400 hover:text-gray-600 hover:border-b">Pricing</a>
                        <a href="#" className="mx-4 font-bold text-gray-400 hover:text-gray-600 hover:border-b">FAQ&apos;s</a>
                        <a href="#" className="mr-2 font-bold text-gray-400 hover:text-gray-600 hover:border-b">Blog</a>
                </div>
                <div className="lg:hidden flex flex-col items-center gap-y-3">
                    <motion.button 
                        className="px-4 py-2 bg-[#f1f2f4] rounded-xl font-bold"
                        whileHover={{scale:1.1}}
                        >
                        Log in
                    </motion.button>
                    <motion.button
                    className="px-4 py-2 bg-[#2e2e2e] rounded-xl text-white font-bold ml-2"
                    whileHover={{scale:1.1}}>
                        Get started
                    </motion.button>
                </div>
            </motion.div>}
            </AnimatePresence>

        </motion.div>
    )
}

export default Navbar