import {Textarea, MantineProvider } from "@mantine/core";

import React from 'react'

export default function Bitsid({
    onChange,
    value,
    active
  }) {
  return (
    <div>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <Textarea
          id="bitsid"
          placeholder="20XXAXPSXXXXH" 
          label="Bits ID"
          autosize
          required
          value={value} 
          onChange={onChange} 
          disabled = {(active==="profile")?true:false}
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

    