import { Square } from "@mui/icons-material";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import { Checkbox, FormControlLabel } from "@mui/material";

const renderCheckbox = ({ input, label }) => (
  <FormControlLabel
    label={label}
    control={
      <Checkbox
        icon={<SquareOutlinedIcon />}
        checkedIcon={<Square />}
        sx={{ color: "#64C9D1" }}
        checked={input.value ? true : false}
        onChange={input.onChange}
      />
    }
  />
);

export default renderCheckbox;
