import { TextField } from "@mui/material";

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <div>
      <TextField
        error={touched && error ? true : false}
        id="standard-basic"
        label={label}
        variant="standard"
        helperText={touched && error}
        {...input}
        {...custom}
      />
    </div>
  );

  export default renderTextField;