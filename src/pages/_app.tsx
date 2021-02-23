import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//Styling
import theme from "../utils/Theme";
import { ChakraProvider } from "@chakra-ui/react";

//Components
import DefualtLayout from "../layouts/Defualt";
import BaseLayout from "../layouts/Base";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || DefualtLayout;

	return (
		<React.StrictMode>
			<ColorModeScript />
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<BaseLayout>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</BaseLayout>
				</ChakraProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</React.StrictMode>
	);
}

export default MyApp;
