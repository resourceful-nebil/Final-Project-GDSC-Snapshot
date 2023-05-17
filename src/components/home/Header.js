import React from 'react'
import Navigation from './Navigation'
import '../../App.css'
import Form from './Form'
import Search from './Search'
function Header(props) {
  const onSubmit = search => {
    props.onSubmit(search);
  }

  return (
    <div className='card'>
      <h1 className='snaphot-header'>SnapShot</h1>
      <Form onSubmit={onSubmit}/>
      <Navigation />
    </div>
  )
}

export default Header
