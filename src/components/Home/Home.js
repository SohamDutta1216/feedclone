import React from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import Currency from './Currency'
import { Card, Grid, Header, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Home({ setSearch, filteredCoins }) {
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>

      <div>
        <SearchBar handleChange={handleChange} />
      </div>
      <div style={{ marginTop: '50px' }}>

        <Container style={{ width: '80%' }}>
          <Header inverted style={{ marginBottom: '30px', fontSize: '35px' }}>Cryptocurrencies</Header>
          <Card.Group itemsPerRow={4}>
            {filteredCoins.map(coin => {
              return (
                <Link to={{
                  pathname: `/${coin.id}`,
                }}>
                  <Currency
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume}
                    volume={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                    rank={coin.market_cap_rank}
                  />
                </Link>
              )
            })}
          </Card.Group>
        </Container>


      </div>
    </div>
  )
}