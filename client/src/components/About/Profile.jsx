import { Typography } from '@mui/material'
import React from 'react'

export default function Profile({
    onSubmit,
    src,
    name,
    email,
    bitsid,
    address,
    branch,
    dual,
    phno,
    nick
}) {
  return (
    <div className="about-card">
      <form className="about" onSubmit={onSubmit}>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src}/>
          </div>
        </label>
        <Typography className="name"> Name: {name}</Typography>
        <Typography className="email">Email: {email}</Typography>
        <Typography className="bitsid">Bits ID: {bitsid}</Typography>
        <Typography className="address">Address: {address}</Typography>
        <div className="branch-display">
          <Typography className='branch'>Branch: {branch}</Typography>
          {(dual&&branch.includes('B'))?(<Typography className="dual">Dual branch: {dual}</Typography>):(<div></div>)}
        </div>
        
        <Typography className="phno">Phone number: {phno}</Typography>
        {nick?(<Typography className="nick">Nickname: {nick}</Typography>):(<div></div>)}
        <button type="submit" className="about-button">Edit Profile </button>
      </form>
    </div>
  )
}
