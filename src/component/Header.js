import React from 'react'

function Header({title,subcrise}) {
  return (
    <h1 className="title">{title}
  <span>{subcrise}</span></h1>
  )
}

export default Header
