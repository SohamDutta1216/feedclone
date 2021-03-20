import React from 'react'
import { Card, Image, Header, Icon, Popup } from 'semantic-ui-react'

export default function Currency({ image, name, symbol, price, volume, priceChange, marketcap, rank, }) {
  return (
    <div style={{ margin: '20px' }}>

      <Card>
        <Card.Content>
          <Image floated='left' src={image} style={{ height: '28px' }} />
          <Card.Header style={{ color: 'blue', marginTop: '7px', fontSize: '15px' }}>{symbol.toUpperCase()} / USD</Card.Header>
          <Card.Header style={{ marginTop: '12px', fontFamily: 'circular, Arial, "Helvetica Neue", Helvetica, sans-serif' }}>${price}</Card.Header>
          <div style={{ marginTop: '12px' }}>
            <p style={{ color: 'black', float: 'left', marginLeft: '5px' }}>Status</p>
            <p style={{ color: 'black', float: 'right', marginRight: '23px' }}>Sponsors</p>
            <br />
            <br />
            <Popup trigger={<Icon name='list' style={{ float: 'right' }} />}>
              <ul>
                <p>Please</p>
                <p>Hire</p>
                <p>Me</p>
                <p>+ 1,000 more sponsors</p>
              </ul>
            </Popup>
            <Popup trigger={<Icon name='circle' style={{ float: 'right' }} />} ><p>I love Chainlink</p></Popup>
            <Popup trigger={<Icon name='circle' style={{ float: 'right' }} />} ><p>I love Chainlink</p></Popup>
            <Popup trigger={<Icon name='circle' style={{ float: 'right' }} />} ><p>I love Chainlink</p></Popup>


            <Icon style={{ float: 'left' }} name='green large circle check' />
            <p style={{ fontWeight: 'bold', color: 'black' }}>Active</p>



          </div>
        </Card.Content>
      </Card>
    </div>
  )
}