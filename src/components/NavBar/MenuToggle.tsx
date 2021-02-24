import React from "react";
import { Box, MenuIcon } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  isOpen: boolean
  toggleMenu: () => void
}

const MenuToggle = ({isOpen, toggleMenu}: Props) => {
	return (
		<div>
			<Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
				{isOpen ? <CloseIcon /> : <HamburgerIcon />}
			</Box>
		</div>
	);
};

export default MenuToggle;
