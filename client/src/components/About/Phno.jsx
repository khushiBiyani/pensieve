import {Textarea } from "@mantine/core";

import React from 'react'

export default function Phno({
    onChange,
    value,
    active
  }) {
  return (
    <div>
      <Textarea
        id="phno"  
        label="Phone number"
        placeholder="10 digit no." 
        maxlength="10"
        autosize
        required
        value={value} 
        onChange={onChange} 
        inputProps={{
          readOnly: (active==="profile")?true:false,
          inputMode: 'numeric', pattern: '[0-9]*' 
        }}
        sx={{
          width: "20vw",
          margin: "auto",
          marginTop: "20px",
          marginRight:"20px",
          label: { color: "white" },
        }}
      />
    </div>
  )
}
