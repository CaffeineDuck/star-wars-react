import { Box, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import NavLogo from "./Logo";
import NavItemsForDesktop from "./NavItemsForDesktop";
import NavItemsForMobile from './NavItemsForMobile'


const NavBar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	return (
		<div>
			<Box py="1rem" mb="0.5rem">
				<Box>
					<Flex>
						<NavLogo />
						<Spacer />
						<NavItemsForDesktop />
						<NavItemsForMobile />
					</Flex>
				</Box>
			</Box>
		</div>
	);
};

export default NavBar;
