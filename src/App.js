import { Box } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Box padding={2} h={"92vh"} overflowY="auto">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
