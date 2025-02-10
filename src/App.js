import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      id="app"
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#282c34",
        color: "white",
        height: "100vh",
        alignContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Header />
        <Body />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
