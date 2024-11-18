'use client';


const SideBar = () => {

    return (
        <div className='flex flex-col gap-4 pt-5 '>
            <div className='flex flex-col items-start justify-start'>
                <div className='text-[14px] font-normal '>
                    <select
                        className='outline-none px-4'
                        style={{ color: 'black' }} // Inline style for additional control
                    >
                        <option className='text-[14px] text-left' style={{ color: 'black' }}>
                            Woman’s Fashion
                        </option>
                        <option style={{ color: 'black' }}>French</option>
                        <option style={{ color: 'black' }}>German</option>
                    </select>
                </div>
                <div className='text-[14px] font-normal '>
                    <select
                        className='outline-none px-4  text-black'
                        style={{ color: 'black' }} // Inline style for additional control
                    >
                        <option style={{ color: 'black' }}>
                            Woman’s Fashion
                        </option>
                        <option style={{ color: 'black' }}>French</option>
                        <option style={{ color: 'black' }}>German</option>
                    </select>
                </div>
            </div>


            <div className='text-[14px] font-normal '>
                Electronics
            </div>

            <div className='text-[14px] font-normal '>
                Home & Lifestyle
            </div>

            <div className='text-[14px] font-normal '>
                Medicine
            </div>
            <div className='text-[14px] font-normal '>
                Sports & Outdoor
            </div >
            <div className='text-[14px] font-normal '>
                Baby’s & Toys
            </div>
            <div className='text-[14px] font-normal '>
                Groceries & Pets
            </div>
            <div className='text-[14px] font-normal '>
                Health & Beauty
            </div>
        </div>
    )
}

export default SideBar