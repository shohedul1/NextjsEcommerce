import React from 'react'
import SideBar from './SideBar/SideBar'
import Carousel from './Carousel/Carousel';
import FristSection from './FristSection/FristSection';
import SliderPage from './Slider/SliderPage';
import SiderPage from './Slider/Sider';


const HomePage = () => {
    return (
        <>

            <div className='md:px-32  px-2'>
                <div className='flex flex-row gap-10'>
                    <div className='border-r-[2px] border-slate-400 pr-5 backdrop-blur-md hidden md:block'>
                        <SideBar />
                    </div>
                    <div className='pt-10 w-full h-[350px] relative overflow-hidden'>
                        <Carousel />
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <SliderPage />

                <FristSection />
            </div>

        </>
    )
}

export default HomePage
