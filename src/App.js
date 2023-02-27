import { Box } from "@chakra-ui/react";
import "./App.css";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Box padding={8} h={"90vh"} overflowY="auto">
        <Content />
      </Box>
    </div>
  );
}

export default App;
