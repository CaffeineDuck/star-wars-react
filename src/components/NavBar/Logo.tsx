import React from "react";
import NextLink from "next/link";
import { Heading, useColorModeValue } from "@chakra-ui/react";

const NavLogo = () => {
	return (
		<div>
			<NextLink href="/" passHref>
				<Heading
					as="a"
					size="xl"
					textColor={useColorModeValue("heading.light", "heading.dark")}
				>
					Star Wars
				</Heading>
			</NextLink>
		</div>
	);
};

export default NavLogo;
