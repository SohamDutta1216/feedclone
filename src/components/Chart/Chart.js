import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Grid, Header, Container } from 'semantic-ui-react'

export default function Chart() {
  const [coin, setCoin] = useState('')
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const coinId = window.location.pathname.replace('/', '')
      setCoin(coinId)
      const results = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`)
      setData(results.data)
    }
    fetchData()
  }, [])
  console.log(coin)
  console.log(data)
  return (
    <div>
      <Container style={{ marginTop: '100px' }}>
        <Header inverted><a href='/'>Data / </a></Header>
        <Header inverted style={{ fontSize: '40px' }}>{coin.toUpperCase()} / USD</Header>
        <Header inverted>Price History</Header>
      </Container>
    </div>
  )
}