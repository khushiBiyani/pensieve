import React from 'react'

export default function Bitsid({
    onChange,
    value
  }) {
  return (
    <div className="field">
      <label htmlFor="bitsid">
        Bits ID:
      </label>
      <input 
        id="bitsid" 
        type="text" 
        onChange={onChange} 
        maxlength="13" 
        value={value} 
        placeholder="20XXAXPSXXXXH" 
        style={{color:"black"}}
        required/>
    </div>
  )
}

    