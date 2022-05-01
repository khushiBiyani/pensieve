import * as React from 'react';
import { Select, MantineProvider } from "@mantine/core";

export default function Dual({
  onChange,
  value,
  active
}) {

  const data=[
    { value: 'A1', label: 'B.E. Chemical' },
    { value: 'A2', label: 'B.E. Civil' },
    { value: 'A7', label: 'B.E. Computer Science' },
    { value: 'A3', label: 'B.E. EEE' },
    { value: 'AA', label: 'B.E. ECE' },
    { value: 'A8', label: 'B.E. ENI' },
    { value: 'A4', label: 'B.E. Mechanical' },
    { value: 'A5', label: 'B. Pharm' },
    { value: 'B1', label: 'MSc. Biology' },
    { value: 'B2', label: 'MSc. Chemistry' },
    { value: 'B3', label: 'MSc. Economics' },
    { value: 'B4', label: 'MSc. Maths' },
    { value: 'B5', label: 'MSc. Physics' },
  ];
  return (
    <div>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <Select
            placeholder="Dual"
            label="Dual"
            required
            maxDropdownHeight={300}
            disabled = {(active==="profile")?true:false}
            data={data}
            onChange={onChange}
            value={value}
            
            sx={{
              width: "15vw",
              label: { color: "white" },
              input: { textAlign: "center" },
              margin: "auto",
              marginTop: "20px",
              marginRight: "20px",
              ["@media (max-width:960px)"]: {
                width: "20%",
                margin: "20px 0",
              },
            }}
          />
      </MantineProvider>
    </div>
  );
}

    