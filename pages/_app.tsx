import { ColorModeScript } from "@chakra-ui/react";
import React, {useState} from "react";
import { QueryClient, QueryClientProvider } from "react-query";

//Styling
import theme from "../components/utils/Theme";
import { Box, ChakraProvider } from "@chakra-ui/react"

//Components
import Navbar from "../components/NavBar";


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [page, setPage] = useState("planets");

  return(
  <React.StrictMode>
    <ColorModeScript />
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box mx="9.9375rem">
          <Navbar/>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
  ) 
}

export default MyApp
