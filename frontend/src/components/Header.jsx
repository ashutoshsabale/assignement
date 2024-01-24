import React from 'react';

function Header({ data, loading, coins, baseUnit, setBaseUnit }) {
    return (
        <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row w-full justify-between py-4 sm:py-8 px-4 sm:px-10 tracking-tighter'>

            <span className='flex items-center justify-center mb-4 sm:mb-0'>
                <img
                    src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
                    alt=""
                    className='flex w-48 sm:w-72 cursor-pointer'
                />
            </span>

            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center text-base sm:text-xl'>
                <span className='cursor-pointer mb-2 sm:mb-0'>
                    <select
                        className='rounded-xl cursor-pointer p-1 w-16 sm:w-24 text-center bg-[#2e3241]'
                        name=""
                        id="coins"
                        value={baseUnit}
                        onChange={(e) => setBaseUnit(e.target.value)}
                    >
                        <option value="INR">INR</option>
                    </select>
                </span>
                <span className='cursor-pointer mb-2 sm:mb-0'>
                    <select
                        className='rounded-xl cursor-pointer p-1 w-16 sm:w-24 text-center bg-[#2e3241]'
                        name=""
                        id="coins"
                        value={baseUnit}
                        onChange={(e) => setBaseUnit(e.target.value)}
                    >
                        {coins?.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </span>
                <span className='cursor-pointer'>
                    <a
                        href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
                        className='flex no-underline text-white'
                        target='_blank'
                    >
                        <button className='py-1 px-4 sm:px-5 bg-[#2e3241] rounded-xl'>
                            BUY {baseUnit}
                        </button>
                    </a>
                </span>
            </div>

            <div className='flex gap-4 sm:gap-8 justify-center items-center mt-4 sm:mt-0'>

                <span className='bg-[#3dc6c1] text-white text-sm p-2 sm:p-3 rounded-xl cursor-pointer font-medium'>
                    Connect Telegram
                </span>

                <span className='flex items-center'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-[#3dc6c1] after:content-[''] after:absolute  after:left-[1px] after:bg-[#3dc6c1] after:border-[#3dc6c1] after:border after:rounded-full after:h-full after:w-6 after:transition-all dark:border-[#3dc6c1] peer-checked:bg-[#2e3241]">
                        </div>
                        <span className="ml-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white"></span>
                    </label>
                </span>
            </div>
        </div>
    );
}

export default Header;
