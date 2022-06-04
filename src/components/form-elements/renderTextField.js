import { TextField } from "@mui/material";

const renderTextField = ({
  input,
  label,
  required,
  meta: { touched, error, invalid },
  ...custom
}) => (
  <div>
    <TextField
      error={touched && invalid ? true : false}
      id="standard-basic"
      label={required ? label + "*" : label}
      variant="standard"
      // helperText={touched && error}
      {...input}
      {...custom}
    />
  </div>
);

export default renderTextField;
