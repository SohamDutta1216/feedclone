import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Header, Container } from 'semantic-ui-react'
import Chart from './Chart'
import { MetroSpinner } from 'react-spinners-kit'

export default function ChartHome() {
  const [coin, setCoin] = useState('')
  const [data, setData] = useState([])
  const [days, setDays] = useState('1')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const coinId = window.location.pathname.replace('/', '')
      setCoin(coinId)
      const results = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`)
      setData(results.data.prices)
      setLoading(false)
    }
    fetchData()
  }, [data])
  console.log(coin)
  console.log(data)
  return (
    <div>
      <Container style={{ marginTop: '100px' }}>
        <Header inverted style={{ fontSize: '15px' }}><a href='/'>Data / </a></Header>
        <Header inverted style={{ fontSize: '40px' }}>{coin.toUpperCase()} / USD</Header>
        <Header inverted>Price History</Header>
        {loading ?
          <Container align="center" style={{ marginTop: '100px' }}>
            <div><MetroSpinner size={100} color="#0000FF" /></div>
          </Container>
          :
          <Chart coinData={data} />
        }
        <Container align="center" style={{ marginTop: '20px' }}>
          <Button onClick={() => { setDays('1') }}>1 Day</Button>
          <Button onClick={() => { setDays('7') }}>7 Days</Button>
          <Button onClick={() => { setDays('30') }}>30 days</Button>
          <Button onClick={() => { setDays('365') }}>365 Days</Button>

        </Container>
      </Container>
    </div>
  )
}