import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const SiderPage = () => {
    return (
        <div className='fles flex-col gap-6'>
            <div className='px-32 flex flex-col'>
                <div className='text-red-500 text-[16px] font-semibold border-l-[20px] pl-4 py-5 rounded-full border-red-500'>
                    Today’s
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center gap-20'>
                        <div className='text-[36px] font-semibold text-black'>Flash Sales</div>
                        <div className='flex items-center gap-2'>
                            <div className='flex flex-col gap-1  '>
                                <p className='text-balck font-medium text-xs text-start'>Days</p>
                                <h1 className='font-bold text-2xl'>03 :</h1>
                            </div>
                            <div className='flex flex-col gap-1  '>
                                <p className='text-balck font-medium text-xs text-start'>Hours</p>
                                <h1 className='font-bold text-2xl'>23 : </h1>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <p className='text-balck font-medium text-xs'>Minutes</p>
                                <h1 className='font-bold text-2xl'>19 : </h1>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <p className='text-balck font-medium text-xs'>Seconds</p>
                                <h1 className='font-bold text-2xl'>56 </h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 flex-row '>
                       <div className='bg-[#F5F5F5] h-[46px] w-[46px] rounded-full flex items-center justify-center overflow-hidden relative'>
                          <FaArrowLeft/>
                       </div>
                       <div className='bg-[#F5F5F5] h-[46px] w-[46px] rounded-full flex items-center justify-center overflow-hidden relative'>
                          <FaArrowRight/>
                       </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default SiderPage