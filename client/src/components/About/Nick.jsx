import {Textarea, MantineProvider } from "@mantine/core";
import React from 'react'

export default function Nick({
    onChange,
    value,
    active
  }) {
  return (
    <div>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <Textarea
          id="nick" 
          label="Nick name"
          onChange={onChange} 
          maxlength="25" 
          value={value} 
          placeholder="(Optional)"
          autosize
          disabled = {(active==="profile")?true:false}
          sx={{
            width: "20vw",
            marginTop: "20px",
            marginRight:"20px",
            label: { color: "white" },
          }}
        />
      </MantineProvider>
      
    </div>
  )
}
