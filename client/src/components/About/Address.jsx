import {Textarea, MantineProvider } from "@mantine/core";
import React from 'react'

export default function Address({
    onChange,
    value,
    active
  }) {
  return (
    <div >
        <MantineProvider theme={{ colorScheme: 'dark' }}>
          <Textarea
          id="address" 
          label="Address"
          onChange={onChange} 
          maxLength="500" 
          value={value}
          minRows={3}
          placeholder="Home address"
          autosize
          required
          disabled = {(active==="profile")?true:false}
          sx={{
            width: "30vw",
            marginTop: "20px",
            marginRight:"20px",
            label: { color: "white" },
            }}
          />
        </MantineProvider>
  </div>
  )
}

  