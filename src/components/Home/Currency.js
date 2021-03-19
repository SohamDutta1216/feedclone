import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default function Currency({ image, name, symbol, price, volume, priceChange, marketcap, rank, }) {
  return (
    <div>
      <Card inverted>
        <Card.Content>
          <Image floated='left' size='mini' src={image} />
        </Card.Content>

      </Card>
    </div>
  )
}