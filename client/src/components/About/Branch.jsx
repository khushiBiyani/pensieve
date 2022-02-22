import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Branch({
  onChange,
  value
}) {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="branch">Branch</InputLabel>
        <Select
          labelId="branch"
          id="branch"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          label="Branch"
          onChange={onChange}
          required
        >
          <MenuItem value={'A1'}>B.E. Chemical</MenuItem>
          <MenuItem value={'A2'}>B.E. Civil</MenuItem>
          <MenuItem value={'A7'}>B.E. Computer Science</MenuItem>
          <MenuItem value={'A3'}>B.E. EEE</MenuItem>
          <MenuItem value={'AA'}>B.E. ECE</MenuItem>
          <MenuItem value={'A8'}>B.E. ENI</MenuItem>
          <MenuItem value={'A4'}>B.E. Mechincal</MenuItem>
          <MenuItem value={'A5'}>B. Pharm</MenuItem>
          <MenuItem value={'B1'}>MSc. Biology</MenuItem>
          <MenuItem value={'B2'}>MSc. Chemistry</MenuItem>
          <MenuItem value={'B3'}>MSc. Economics</MenuItem>
          <MenuItem value={'B4'}>MSc. Maths</MenuItem>
          <MenuItem value={'B5'}>MSc. Physics</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

    