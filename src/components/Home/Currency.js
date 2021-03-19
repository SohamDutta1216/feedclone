import React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'

export default function Currency({ image, name, symbol, price, volume, priceChange, marketcap, rank, }) {
  return (
    <div>

      <Card inverted>
        <Card.Content>
          <Image floated='left' size='mini' src={image} />
          <Card.Header style={{ color: 'blue' }}>{name}</Card.Header>
        </Card.Content>

      </Card>

    </div>
  )
}