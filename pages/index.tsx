//Dependencies
import React, { useState } from "react";

//Styling
import theme from "../components/utils/Theme";
import { Box, ChakraProvider } from "@chakra-ui/react"

//Components
import Navbar from "../components/NavBar";
import Planets from "../components/Planets";
import Person from "../components/Person";

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <ChakraProvider theme={theme}>
      <Box mx="9.9375rem">
        <Navbar setPage={setPage} />
        <Box>{page === "planets" ? <Planets /> : <Person />}</Box>
      </Box>
    </ChakraProvider>
  );
};

export default App