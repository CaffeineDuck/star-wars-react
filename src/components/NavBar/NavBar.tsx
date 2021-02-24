import { Box, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import NavLogo from "./Logo";
import MenuToggle from "./MenuToggle";
import NavItems from "./NavItems";


const NavBar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const toggleMenu = () => {
		setMenuIsOpen(!menuIsOpen)
	}

	return (
		<div>
			<Box py="1rem" mb="0.5rem">
				<Box>
					<Flex>
						<NavLogo />
						<Spacer />
						<NavItems menuIsOpen={menuIsOpen}/>
						<MenuToggle isOpen={menuIsOpen} toggleMenu={toggleMenu}/>
					</Flex>
				</Box>
			</Box>
		</div>
	);
};

export default NavBar;
