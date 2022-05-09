import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div style={{ display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
        <h3 style={{padding: '5px', border: '1 px solid black'}}>Help</h3>
        <h3 style={{padding: '5px', border: '1 px solid black'}}>Options</h3>
    </div>
  )
}

export default NavBar;