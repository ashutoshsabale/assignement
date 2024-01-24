import React from 'react';

function Table({ data }) {
    return (
        <div className='w-full box-border overflow-x-auto px-4 md:px-10'>
            <table className='w-full box-border table text-center border-collapse md:border-spacing-y-4 md:border-separate'>
                <thead className='table-header-group align-middle'>
                    <tr className='table-row text-lg md:text-2xl text-gray-400 tracking-normal'>
                        <th><span>#</span></th>
                        <th><span>Name</span></th>
                        <th><span>Last Traded Price</span></th>
                        <th><span>Buy / Sell Price</span></th>
                        <th><span>Volume</span></th>
                        <th><span>Base Unit</span></th>
                    </tr>
                </thead>
                <tbody className='w-full table-row-group tracking-tighter'>
                    {data &&
                        data.map((item, index) => (
                            <tr
                                key={index}
                                className='bg-[#2e3241] table-row border text-lg md:text-2xl font-bold'
                            >
                                <td className='p-2 rounded-s-md'>{index + 1}</td>

                                <td className='p-2'>{item.name}</td>

                                <td className='p-2'>{item?.last && `₹ ${(item?.last).toLocaleString('en-IN')} `}</td>

                                <td className='p-2'>{item?.buy && `₹ ${(item?.buy).toLocaleString('en-IN')} `}/{item?.sell && ` ₹ ${(item?.sell).toLocaleString('en-IN')}`}</td>

                                <td className='p-2'>{item.volume}</td>

                                <td className='p-2 rounded-e-md'>{item.base_unit}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
