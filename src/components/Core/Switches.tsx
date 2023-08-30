import React, { useState } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";

interface SwitchProps {
  label?: string;
}

const Switches: React.FC<SwitchProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={isChecked} onChange={handleChange} />}
      label={label}
    />
  );
};

export default Switches;
