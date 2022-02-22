import { TextField } from '@mui/material'
import React from 'react'

export default function Nick({
    onChange,
    value
  }) {
  return (
    <div className="field">
      {/* <label htmlFor="nick">
        Nick name:
      </label> */}
      <TextField 
        id="nick" 
        label="Nick name"
        onChange={onChange} 
        maxlength="25" 
        value={value} 
        placeholder="(Optional)"/>
    </div>
  )
}
