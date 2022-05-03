import {Textarea, MantineProvider } from "@mantine/core";

import React from 'react'

export default function Phno({
    onChange,
    value,
    active
  }) {
  return (
    <div>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <Textarea
          id="phno"  
          label="Phone number"
          placeholder="10 digit no." 
          maxlength="10"
          autosize
          required
          value={value} 
          onChange={onChange} 
          disabled = {(active==="profile")?true:false}
          inputProps={{
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
      </MantineProvider>
      
    </div>
  )
}
