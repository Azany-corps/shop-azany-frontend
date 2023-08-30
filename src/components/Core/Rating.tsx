import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({rating, readOnly}:{rating:number; readOnly?:boolean}) {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={rating}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        readOnly= {readOnly}
      />
    </Box>
  );
}