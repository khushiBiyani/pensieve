import React from 'react'

export default function Nick({
    onChange,
    value
  }) {
  return (
    <div className="field">
      <label htmlFor="nick">
        Nick name:
      </label>
      <input 
        id="nick" 
        type="text" 
        onChange={onChange} 
        maxlength="25" 
        value={value} 
        placeholder="(Optional)" 
        style={{color:"black"}}/>
    </div>
  )
}
