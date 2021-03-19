import React from 'react'
import { Header, Container } from 'semantic-ui-react'

export default function SearchBar({ handleChange }) {
  return (
    <div style={{ marginTop: '40px' }}>
      <Container textAlign='left' >
        <Header inverted style={{ fontSize: '40px' }}>Chainlink Data</Header>
        <Header inverted style={{ fontSize: '20px' }}>Explore the decentralized oracle networks powered by Chainlink.</Header>
        <input style={{ minWidth: '100px', padding: '2px 23px 2px 30px', outline: '0', width: '65%', border: '1px solid grey', height: '40px', borderRadius: '5px' }} placeholder="Try 'Ethereum' or 'Eth' " onChange={handleChange} />
      </Container>
    </div>
  )
}