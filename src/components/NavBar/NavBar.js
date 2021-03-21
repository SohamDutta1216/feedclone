import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{ marginTop: '20px' }}>
      <Container style={{ width: '100%' }}>
        <Menu inverted secondary>
          <Link to='/'>
            <Menu.Item position='left'>
              <img style={{ width: '120px' }} src='/chainlink.png' alt='logo' />
            </Menu.Item>
          </Link>
          <Menu.Item position='right'>
            <Button inverted>Request price feed</Button>
          </Menu.Item>
        </Menu>
      </Container>
    </div>
  )
}