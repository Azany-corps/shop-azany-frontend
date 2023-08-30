import React, { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Rating } from '@mui/material';

interface RadioWithRatingProps {
  label: string;
}

function RadioWithRating({ label }: RadioWithRatingProps) {
  const [value, setValue] = useState<string>('5');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const renderRadio = (value: string, label: string, ratingValue: number) => {
    return (
      <FormControlLabel value={value} control={<Radio />} label={label} />
    );
  }

  return (
    <div className='flex flex-col gap-2'>
      <p className="text-black text-opacity-60">{label}:</p>
      <Rating name="rating" value={parseInt(value)} max={5} readOnly />
      <RadioGroup
        name="rating"
        value={value}
        onChange={handleChange}
        style={{ marginRight: '16px' }}
      >
        {renderRadio('5', '5 stars', 5)}
        {renderRadio('4', '4 stars', 4)}
        {renderRadio('3', '3 stars', 3)}
        {renderRadio('2', '2 stars', 2)}
        {renderRadio('1', '1 star', 1)}
      </RadioGroup>
    </div>
  );
}

export default RadioWithRating;
