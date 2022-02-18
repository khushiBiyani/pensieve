import React from 'react'

export default function Address({
    onChange,
    value
  }) {
  return (
    <div className="field">
    <label htmlFor="address">
      Address:
    </label>
    <input 
      id="address" 
      type="textarea"
      onChange={onChange} 
      maxLength="255" 
      value={value} 
      style={{color:"black"}}
      placeholder="Home address" 
      rows='3'
      required/>
  </div>
  )
}

  