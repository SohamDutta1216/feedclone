import React from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'

export default function Header() {
  return (
    <div style={{ marginTop: '20px' }}>
      <Menu inverted secondary>
        <Menu.Item position='left'>
          <img style={{ width: '140px', marginLeft: '90px' }} src='/chainlink.png' alt='logo' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button style={{ marginRight: '90px' }} inverted>Request price feed</Button>
        </Menu.Item>
      </Menu>

    </div>
  )
}