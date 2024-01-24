import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import DisplayStockInfo from '../components/DisplayStockInfo'
import Table from '../components/Table'
import Footer from '../components/Footer'

function Home({data, loading}) {

    const [coins, setCoins] = useState([])
    const [baseUnit, setBaseUnit] = useState("BTC")
    const [filteredData, setFilteredData] = useState([])

    useEffect(()=>{
        setCoins(Array.from(new Set(data?.map(item => item.base_unit.toUpperCase()))))
        let filtered={};
        if(baseUnit){
            filtered = data?.filter(item => item.base_unit === baseUnit.toLowerCase())
            setFilteredData(filtered)
        }

        console.log(filtered);

    }, [data, baseUnit])

    return (
        <div className='w-full relative'>
            <Header data={data} loading={loading} coins={coins} baseUnit={baseUnit} setBaseUnit={setBaseUnit}/>
            <DisplayStockInfo data={filteredData[0]}/>
            <Table data={data}/>
            <Footer />
        </div>
    )
}

export default Home