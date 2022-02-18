import React from 'react'

export default function Branch({
    onChange,
    value
  }) {
  return (
    <div className="field">
      <label htmlFor="branch">
        Branch:
      </label>
      <input 
        id="branch" 
        type="textarea"
        onChange={onChange} 
        maxLength="255" 
        value={value} 
        style={{color:"black"}}
        placeholder="It's a nice day!" 
        required/>
    </div>
  )
}

    