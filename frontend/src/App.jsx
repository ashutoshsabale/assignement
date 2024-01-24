import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(()=>{
		setLoading(true)
		fetch("http://localhost:8000/api/stock-info")
		.then((res)=>{
			return res.json()
		})
		.then((res)=>{
			setData(res.data)
			setLoading(false)

		})

	},[])

	return (
		<>
			<div className='w-screen'>
				<Home data={data} loading={loading} />
			</div>
		</>
	)
}

export default App
