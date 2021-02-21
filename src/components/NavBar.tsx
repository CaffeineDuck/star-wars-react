import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	HStack,
	Spacer,
	useColorModeValue,
	MenuList,
	MenuItem,
	Menu,
	MenuButton,
} from "@chakra-ui/react";
import React from "react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import NextLink from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {}

const NavBar = (props: Props) => {
	const headingColor = useColorModeValue("heading", "yellow");

	return (
		<div>
			<Box py="1rem">
				<Box>
					<Flex>
						<NextLink href="/" passHref>
							<Heading as="a" size="xl" textColor={headingColor}>
								Star Wars
							</Heading>
						</NextLink>

						<Spacer />

						<HStack spacing="1rem">
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
					</Flex>
				</Box>
			</Box>
		</div>
	);
};

export default NavBar;
