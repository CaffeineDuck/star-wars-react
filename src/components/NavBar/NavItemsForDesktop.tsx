import React from "react";
import {
	HStack,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "../utilities/ColorModeSwitcher";

const NavItemsForDesktop = () => {
	return (
		<div>
			<HStack spacing="1rem" display={{ base: "none", md: "block" }}>
				<NextLink href="/about" passHref>
					<Button as="a">About</Button>
				</NextLink>

				<NextLink href="/star-wars" passHref>
					<Button as="a">Star Wars</Button>
				</NextLink>

				<Menu>
					<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
						More
					</MenuButton>

					<MenuList>
						<NextLink href="/planets" passHref>
							<MenuItem>Planets</MenuItem>
						</NextLink>

						<NextLink href="/peoples" passHref>
							<MenuItem>Peoples</MenuItem>
						</NextLink>
					</MenuList>
				</Menu>

				<ColorModeSwitcher placeSelf="flex-end" pr="1rem" />
			</HStack>
		</div>
	);
};

export default NavItemsForDesktop;
