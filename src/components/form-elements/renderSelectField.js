import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getCountries } from "../../api/addressApi";
import { formValueSelector } from "redux-form";
import OrderForm from "../../containers/FieldLevelValidationForm";
import { connect } from "react-redux";

export default function RenderSelectField({
  input,
  label,
  meta,
  children,
  ...custom
}) {
  console.log(meta);
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
        console.log(res);
        setCountries(res.data);
      })
      .catch(() => {
        //setLoading(false);
      });
  }

  return (
    <div>
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        clearOnEscape
        renderInput={(params) => (
          <TextField
            {...params}
            error={meta.error ? true : false}
            label={label}
            variant="standard"
          />
        )}
        onChange={(event, index, value) => input.onChange(index.name.common)}
      />
      {
        //  meta.error&& (<p className='error'>{meta.error}</p>)
      }
    </div>
  );
}
