import { TextField } from '@mui/material'
import React from 'react'

export default function Bitsid({
    onChange,
    value
  }) {
  return (
    <div className="field">
      {/* <label htmlFor="bitsid">
        Bits ID:
      </label> */}
      <TextField 
        id="bitsid"
        label="Bits ID"  
        onChange={onChange} 
        maxlength="13" 
        value={value} 
        placeholder="20XXAXPSXXXXH" 
        required/>
    </div>
  )
}

    