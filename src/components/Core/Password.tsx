import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";

interface Props {
  label: string;
  name: string;
  required?: boolean;
}

interface State {
  showPassword: boolean;
}

export default function PasswordInputWithToggle(props: Props) {
  const [state, setState] = useState<State>({
    showPassword: false
  });

  const handleToggleClick = () => {
    setState({ showPassword: !state.showPassword });
  };

  return (
    <TextField
      variant="outlined"
      type={state.showPassword ? "text" : "password"}
      label={props.label}
      name={props.name}
      id={props.name}
      className={"px-4 py-3"}
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleToggleClick}>
            {state.showPassword ? (
              <VisibilityRounded />
            ) : (
              <VisibilityOffRounded />
            )}
          </IconButton>
        )
      }}
      {...props.required && { required: true }}
    />
  );
}
