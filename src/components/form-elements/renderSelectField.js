import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getCountries } from "../../api/addressApi";

export default function RenderSelectField({
  input,
  required,
  name,
  label,
  meta,
  children,
  ...custom
}) {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    loadCountries();
  }, []);

  const defaultProps = {
    options: countries,
    getOptionLabel: (option) => option.name.common,
  };

  async function loadCountries() {
    await getCountries()
      .then((res) => {
        setCountries(res.data);
      })
      .catch(() => {});
  }

  return (
    <div>
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField
            {...params}
            label={required ? label + "*" : label}
            variant="standard"
          />
        )}
        noOptionsText="No results found"
        onChange={(event, index, value) => input.onChange(index.name.common)}
      />

      {
        // forms.OrderForm.syncErrors.name&& (<p className='error'>{forms.OrderForm.syncErrors.name}</p>)
      }
    </div>
  );
}
