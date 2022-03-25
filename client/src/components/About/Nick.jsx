import {Textarea } from "@mantine/core";
import React from 'react'

export default function Nick({
    onChange,
    value,
    active
  }) {
  return (
    <div>
      <Textarea
        id="nick" 
        label="Nick name"
        onChange={onChange} 
        maxlength="25" 
        value={value} 
        placeholder="(Optional)"
        autosize
        inputProps={{
          readOnly: (active==="profile")?true:false,
        }}
        sx={{
          width: "20vw",
          marginTop: "20px",
          marginRight:"20px",
          label: { color: "white" },
        }}
      />
    </div>
  )
}
