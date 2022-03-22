import * as React from 'react';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography>
        <h2>Total Cost</h2>
        </Typography>
      <Typography component="p" variant="h4">
        $3,024.00temp
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019temp
      </Typography>
    </React.Fragment>
  );
}