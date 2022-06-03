import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAddress } from "../../api/addressApi";
import { useSelector } from "react-redux";

export default function RenderSearchField({
  input,
  label,
  meta,
  children,
  ...custom
}) {
  const [searchResults, setSearchResults] = React.useState([]);

  const forms = useSelector((state) => state.form);

  const defaultProps = {
    options: searchResults,
    getOptionLabel: (option) =>
      `${option.properties.address_line1},${option.properties.address_line2}`,
  };

  async function searchAddress(value) {
    if(value.length>=4){
    await getAddress(value, `,${forms.OrderForm.values.country}`)
      .then((res) => {
        setSearchResults(res.data.features);
      })
      .catch((e) => {
        throw e;
      });
    }
  }

  return (
    <div>
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        className='search'
        clearOnEscape
        renderInput={(params) => (
          <TextField
            {...params}
            error={meta.error ? true : false}
            onChange={(e) => searchAddress(e.target.value)}
            variant="standard"
            placeholder={label}
            // {...input}
          />
        )}
        filterOptions={(x) => x}
        onChange={(event, index, value) => input.onChange(index)}
      />
      {
        // meta.touched&& forms.OrderForm.syncErrors.label&& (<p className='error'>{forms.OrderForm.syncErrors.label}</p>)
      }
    </div>
  );
}
