import { TextField } from '@mui/material'
import React from 'react'

export default function Address({
    onChange,
    value
  }) {
  return (
    <div className="field">
    {/* <label htmlFor="address">
      Address:
    </label> */}
    <TextField 
      id="address" 
      label="Address"
      onChange={onChange} 
      maxLength="255" 
      value={value}
      placeholder="Home address" 
      multiline
      maxRows={4}
      required/>
  </div>
  )
}

  