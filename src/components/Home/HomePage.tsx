import React from 'react'
import SideBar from './SideBar/SideBar'
import Carousel from './Carousel/Carousel';
import SiderPage from './Sider/Sider';


const HomePage = () => {
    return (
        <>

            <div className='px-32 '>
                <div className='flex flex-row gap-12'>
                    <div className='border-r-[2px] border-slate-400 pr-5 backdrop-blur-md '>
                        <SideBar />
                    </div>
                    <div className='w-full h-[344px] relative overflow-hidden'>
                        <Carousel />
                    </div>
                </div>
            </div>
            <div className='pt-36'>
                <SiderPage />
            </div>

        </>
    )
}

export default HomePage

