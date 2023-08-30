import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from '@material-ui/core';

interface Props {
  label: string;
  options: { label: string; value: number }[];
  value: number;
  onChange: (value: number) => void;
}

const useStyles = makeStyles({
  selectOutlined: {
    '&:focus': {
      borderColor: '#515151',
    },
  },
});

const Dropdown: React.FC<Props> = ({ label, options, value, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<number>(value);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as number;
    setSelectedValue(value);
    onChange(value);
  };

  const classes = useStyles();

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={label}
        value={selectedValue}
        label={label}
        onChange={handleChange}
        classes={{
          outlined: classes.selectOutlined,
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
