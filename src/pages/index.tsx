//Dependencies
import React from "react";
import { Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

const App = () => {
	return (
		<div>
			<Head>
				<title>Home - Star Wars</title>
			</Head>
			<Flex>
				<Heading placeSelf="center" mx="auto" mt="35vh">
					All the star wars data you would want right here!
				</Heading>
			</Flex>
		</div>
	);
};

export default App;
