import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";

export default function Loader(props) {
  return (
    <Box sx={{ display: 'flex',justifyContent:'center',margin:'10rem' }}>
      <CircularProgress size={100} sx={{color:'#64c9d1'}}/>
    </Box>
  );
}
