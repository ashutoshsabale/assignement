function DisplayStockInfo({ data }) {

    return (
        <div className='flex flex-col xl:px-24 sm:flex-row md:flex-row lg:px-36 lg:flex-row xl:flex-row w-full justify-between px-4 pb-8  sm:px-8 tracking-tighter'>

            <div className='flex flex-col justify-center items-center gap-2'>
                <span className='text-3xl font-bold text-[#3dc6c1]'>
                    {data?.buy && `₹  ${(data?.buy).toLocaleString('en-IN')}`}
                </span>
                <span className='text-xl text-gray-400 font-semibold'>
                    Buy Price
                </span>
            </div>

            <div className='flex flex-col gap-3 justify-center items-center'>
                <span className='text-3xl text-gray-400'>
                    Best Price to Trade
                </span>
                {data?.last && <h1 className='font-semibold pb-2 text-5xl sm:text-6xl md:text-7xl'>
                    {`₹ ${(data?.last).toLocaleString('en-IN')}`}
                </h1>}
                <span className='text-md text-gray-400'>
                    {`${data?.name} last traded price`}
                </span>
            </div>

            <div className='flex flex-col justify-center items-center gap-2'>
                <span className='text-3xl font-bold text-[#3dc6c1]'>
                    {data?.sell && `₹  ${(data?.sell).toLocaleString('en-IN')}`}
                </span>
                <span className='text-xl text-gray-400 font-semibold'>
                    Sell Price
                </span>
            </div>
        </div>
    )
}

export default DisplayStockInfo
