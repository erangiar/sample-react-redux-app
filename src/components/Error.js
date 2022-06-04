import { ErrorOutline } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Error(props) {
  return (
    <Box
      sx={{
        //  display: "flex",
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
        {props.msg}
      </div>

      <div
        style={{
          fontFamily: "Montserrat-Thin",
          fontSize: "1.5rem",
        }}
      >
        Please try again in a moment
      </div>
    </Box>
  );
}
