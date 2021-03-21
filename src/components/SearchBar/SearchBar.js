import React from 'react'
import { Header, Container } from 'semantic-ui-react'

export default function SearchBar({ handleChange }) {
  return (
    <div style={{ marginTop: '40px' }}>
      <Container style={{ width: '90%' }} >
        <Header inverted style={{ fontSize: '40px', color: '#95b9e5' }}>Chainlink Data</Header>
        <Header inverted style={{ fontSize: '20px', color: '#bab4ab' }}>Explore the decentralized oracle networks powered by Chainlink.</Header>
        <input style={{ maxWidth: '700px', padding: '2px 23px 2px 30px', outline: '0', width: '65%', border: '1px solid grey', height: '40px', borderRadius: '5px', backgroundColor: '#201c1c', color: 'whitesmoke' }} placeholder="Try 'Ethereum' or 'Eth' " onChange={handleChange} />
      </Container>
    </div>
  )
}