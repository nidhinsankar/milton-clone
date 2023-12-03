'use client';
import { motion } from "framer-motion";
import calendar from '../public/calendar.webp'
import productOne from '../public/productone.webp'
import messageOne from '../public/messageOne.webp'
import messageTwo from '../public/messageTwo.webp'
import featureOne from '../public/calendarfeature.svg'
import featureTwo from '../public/featuretwo.svg'
import featureThree from '../public/featurethree.svg'
import featureFour from '../public/featurefour.webp'
import featureFive from '../public/featurefive.webp'
import featureSix from '../public/featuresix.webp'
import Image from "next/image";


const Features = () => {

    return (
        <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="min-h-[calc(100vh-80px)] w-[80%] mx-auto flex items-center justify-start flex-col pt-8 mt-24">
            <h2
                className="px-4 py-2 bg-[#f1f2f4] rounded-full font-bold"
            >
                An other way to imagine time
            </h2>
            <p 
                className="pt-3 font-extrabold text-[32px] leading-[38px] flex flex-col items-center"
            >
                Discover your new superpowers
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0,rotateX:360}} viewport={{once:true}} className="flex flex-col justify-start w-[90%] md:w-[70%] lg:w-[40%] space-y-4 mt-3">
                    <h2 className="px-4 py-2 w-[220px] bg-[#fee9cb] mx-4 flex justify-center rounded-full font-bold">
                        Seamless Scheduling
                    </h2>
                    <p className="pt-3 text-[#2e2e2e] font-extrabold text-[40px] leading-[52px]">Focus on what matters most for you</p>
                    <p className="pt-3 text-[#6b6b78] font-extrabold text-[20px] leading-[32px]">Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks</p>
                </motion.div>
                <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0,rotateX:360}} viewport={{once:true}} className="w-[90%] md:w-[70%] lg:w-[50%] ">
                    <Image src={calendar} />
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center">
                <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0,rotateX:360}} viewport={{once:true}} className="flex flex-col justify-start space-y-4 w-[90%] md:w-[70%] lg:w-[40%]">
                    <h2 className="px-4 py-2 w-[220px] bg-[#cceafd] mx-4 flex justify-center rounded-full font-bold">
                        Smart Reminders & Task
                    </h2>
                    <p className="pt-3 text-[#2e2e2e] font-extrabold text-[40px] leading-[52px]">Never miss an important deadline or event again</p>
                    <p className="pt-3 text-[#6b6b78] font-extrabold text-[20px] leading-[32px]">Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                    <div className="bg-[#2e2e2e] text-white font-medium self-start lg:self-end p-3 w-[70%] rounded-t-xl rounded-bl-lg rounded-br relative">
                        <p>I love how user-friendly this app is! It's so easy to add events and set reminders!</p>
                        <span className="text-[#8b8b98]">Adam, entrepreneur</span>
                        <Image src={messageOne} className="absolute -bottom-12 -right-24 w-28 h-28" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0,rotateX:360}} viewport={{once:true}} className="w-[90%] md:w-[70%] lg:w-[50%]">
                    <Image src={productOne} />
                </motion.div>
            </div>
            <div  className="flex flex-col md:flex-row justify-between items-center">
                <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0,rotateX:360}} viewport={{once:true}} className="flex flex-col justify-start w-[90%] md:w-[70%] lg:w-[50%]  space-y-4">
                    <h2 className="px-4 py-2 w-[220px] bg-[#cceafd] mx-4 flex justify-center rounded-full font-bold">
                        Seamless Scheduling
                    </h2>
                    <p className="pt-3 text-[#2e2e2e] font-extrabold text-[40px] leading-[52px]">Focus on what matters most for you</p>
                    <p className="pt-3 text-[#6b6b78] font-extrabold text-[20px] leading-[32px]">Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks</p>
                    <div className="bg-[#2e2e2e] text-white font-medium self-end lg:self-center p-3 w-[55%] rounded-t-xl rounded-bl-lg rounded-br relative">
                        <p>I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.</p>
                        <span className="text-[#8b8b98]">Annie, Designer</span>
                        <Image src={messageTwo} className="absolute -bottom-6 -left-24 w-20 h-20 md:w-28 md:h-28" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0,rotateX:360}} viewport={{once:true}} className="w-[90%] md:w-[70%] lg:w-[50%]  ">
                    <Image src={productOne} />
                </motion.div>
            </div>
            <div className="w-[80%] mx-auto flex items-center justify-start flex-col pt-8 mt-24">
                <h2
                    className="px-4 py-2 bg-[#f1f2f4] rounded-full font-bold"
                >
                    And so much more...
                </h2>
                <p 
                    className="pt-3 font-extrabold text-center text-[32px] leading-[38px] flex flex-col items-center"
                >
                    Our features make your life easy
                </p>
                <FeatureBox />
            </div>
        </motion.div>
    )
}
export default Features


const FeatureBox = () => {

    const features = [
        {title:'Cross-Device Sync',
        description:'Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.',
        image:featureOne,colour:'bg-[#f1f2f4]'},
        {title:'Auto Event Import',
        description:'Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.',
        image:featureTwo,colour:'bg-[#fee9cb]'},
        {title:'Task Delegation',description:'Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.',
        image:featureThree,colour:'bg-[#cceafd]'},
        {title:'Voice Command Integration',description:'Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.',
        image:featureFour,
        colour:'bg-[#ddf4e4]'},
        {title:'Customizable Alerts',description:'Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.',
        image:featureFive,colour:'bg-[#fdded6]'},
        {title:'Privacy Protection',description:'Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.',image:featureSix,
        colour:'bg-[#c39cf6]'}
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 lg:mt-11">
        {features.map(feature => (
            <div className="flex flex-col items-start justify-start">
                <div className="bg-[#f1f2f4] w-full h-[300px] flex justify-center items-center rounded-2xl">
                <Image src={feature.image} className="w-[60%] h-[80%]" />
                </div>
                <h2
                    className={`px-4 py-2  ${feature.colour} rounded-full font-bold mt-4`}>
                    {feature.title}
                </h2>
                <p className="font-medium text-base text-[#6b6b78] mt-6">{feature.description}</p>
            </div>
        ))}
        </div>
    )
}