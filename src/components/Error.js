import { ErrorOutline } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Error({msg,setContext}) {
  return (
    <Box
      sx={{
        justifyContent: "center",
        margin: "10rem",
        color: "red",
        textAlign: "center",
      }}
    >
      <ErrorOutline style={{ fontSize: "6rem" }} />
      <div
        style={{
          fontFamily: "Montserrat-Light",
          fontSize: "2rem",
          marginBottom: "2rem",
        }}
      >
        {msg}
      </div>

      <div className='mb-5'
        style={{
          fontFamily: "Montserrat-Thin",
          fontSize: "1.5rem",
        }}
      >
        Please try again in a moment
      </div>
      <button className='custom-button' onClick={()=>setContext('order_form')}>Go Back</button>
    </Box>
  );
}
