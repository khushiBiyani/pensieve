import React from 'react'

export default function Phno({
    onChange,
    value
  }) {
  return (
    <div className="field">
      <label htmlFor="mobno">
        Phone number:
      </label>
      <input 
        id="phno" 
        type="text" 
        onChange={onChange} 
        maxlength="10" 
        value={value} 
        placeholder="10 digit no." 
        style={{color:"black"}}
        required/>
    </div>
  )
}
