import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'

export default function Home({ setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <NavBar />

      <SearchBar />
    </div>
  )
}