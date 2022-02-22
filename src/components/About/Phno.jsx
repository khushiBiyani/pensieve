import { TextField } from '@mui/material'
import React from 'react'

export default function Phno({
    onChange,
    value
  }) {
  return (
    <div className="field">
      {/* <label htmlFor="mobno">
        Phone number:
      </label> */}
      <TextField 
        id="phno"  
        label="Phone number"
        onChange={onChange} 
        maxlength="10" 
        value={value} 
        placeholder="10 digit no." 
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        required/>
    </div>
  )
}
