import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

//Styling
import theme from "../utils/Theme";
import { Box, ChakraProvider } from "@chakra-ui/react";

//Components
import Navbar from "../components/NavBar";
import TopLoadingBar from "../components/TopLoadingBar";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<ColorModeScript />
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>

					<Box mx="9.9375rem">
						<TopLoadingBar />
						<Navbar />
						<Component {...pageProps} />
					</Box>
					
				</ChakraProvider>
			</QueryClientProvider>
		</React.StrictMode>
	);
}

export default MyApp;
