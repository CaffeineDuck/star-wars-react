import React from "react";
import {
	HStack,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "./ColorModeSwitcher";

interface Props {
	menuIsOpen: boolean
}

const NavItems = ({menuIsOpen}: Props) => {
	const menuDisplay = menuIsOpen? 'block': 'none'

	return (
		<div>
			<Stack direction={menuIsOpen? "column": "row"} spacing="1rem" display={{base: menuDisplay, md: "block"}}>
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
			</Stack>
		</div>
	);
};

export default NavItems;
