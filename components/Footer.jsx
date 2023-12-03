
import twitter from '../public/twitter.svg'
import facebook from '../public/facebook.svg'
import linkedin from '../public/linkedin.svg'
import Image from 'next/image'

const Footer = () => {

    return (
        <div className="bg-[#f1f2f4]">
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-10'>

            <div className='flex flex-col items-start px-4 gap-y-4 text-base leading-5 font-medium text-[#6b6b78]'>
                <h3 className="text-[24px] leading-[28px] font-bold">Milton</h3>
                <p>A short text explaining why my startup is so cool.</p>
                <p>© My super start-up</p>
                <div className='flex gap-x-2'>
                    <Image src={twitter} />
                    <Image src={facebook} />
                    <Image src={linkedin} />
                </div>
            </div>
            <div className='flex flex-col items-start px-4 gap-y-4 text-base leading-5 font-medium text-[#6b6b78]'>
                <h3 className="text-[24px] leading-[28px] font-bold">Products</h3>
                <ul className='flex flex-col gap-y-4'>
                    <li>Features</li>
                    <li>Testamonials</li>
                    <li>Pricing</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='flex flex-col items-start px-4 gap-y-4 text-base leading-5 font-medium text-[#6b6b78]'>
                <h3 className="text-[24px] leading-[28px] font-bold">Resources</h3>
                <ul className='flex flex-col gap-y-4'>
                    <li>Change log</li>
                    <li>Help center</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex flex-col items-start px-4 gap-y-4 text-base leading-5 font-medium text-[#6b6b78]'>
                <h3 className="text-[24px] leading-[28px] font-bold">Others</h3>
                <ul className='flex flex-col gap-y-4'>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Affiliation</li>
                    <li>Press</li>
                </ul>
            </div>
            <div className='flex flex-col items-start px-4 gap-y-4 text-base leading-5 font-medium text-[#6b6b78]'>
                <h3 className="text-[24px] leading-[28px] font-bold">From the Blog</h3>
                <ul className='flex flex-col gap-y-4'>
                    <li>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</li>
                    <li>Organizing Your Calendar for Enhanced Productivity and Focus</li>
                    <li>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</li>
                    <li>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Footer