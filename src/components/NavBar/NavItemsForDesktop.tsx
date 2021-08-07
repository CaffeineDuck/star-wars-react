import React from "react";
import {
	HStack,
	Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import ColorModeSwitcher from "../utilities/ColorModeSwitcher";

const NavItemsForDesktop = () => {
	return (
		<div>
			<HStack spacing="1rem" display={{ base: "none", md: "block" }}>
				<NextLink href="/about" passHref>
					<Button as="a">About</Button>
				</NextLink>

				<NextLink href="/planets" passHref>
					<Button as="a">Planets</Button>
				</NextLink>

				<NextLink href="/peoples" passHref>
					<Button as="a">Peoples</Button>
				</NextLink>

				<ColorModeSwitcher placeSelf="flex-end" pr="1rem" />
			</HStack>
		</div>
	);
};

export default NavItemsForDesktop;
