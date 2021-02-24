import React from "react";
import {
	Button,
	VStack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	useDisclosure,
	Box,
	useColorModeValue,
	Flex,
	IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "../utilities/ColorModeSwitcher";

const NavItemsForDesktop = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div>
			<Box display={{ base: "block", md: "none" }}>
				<IconButton aria-label={`${isOpen? 'close': 'open'} navigation menu`} onClick={onOpen}>
					{isOpen ? <CloseIcon /> : <HamburgerIcon />}
				</IconButton>

				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							fontSize="2xl"
							color={useColorModeValue("heading.light", "heading.dark")}
						>
							Navigation
						</ModalHeader>
						<ModalBody>
							<VStack>
								<NextLink href="/about" passHref>
									<Button width="full" as="a" onClick={onClose}>
										About
									</Button>
								</NextLink>

								<NextLink href="/star-wars" passHref>
									<Button width="full" as="a" onClick={onClose}>
										Star Wars
									</Button>
								</NextLink>

								<NextLink href="/planets" passHref>
									<Button width="full" as="a" onClick={onClose}>
										Planets
									</Button>
								</NextLink>

								<NextLink href="/peoples" passHref>
									<Button width="full" as="a" onClick={onClose}>
										Peoples
									</Button>
								</NextLink>
							</VStack>
						</ModalBody>

						<ModalFooter>
							<Flex>
								<ColorModeSwitcher pr="1rem" mr="1rem" />

								<Button mx="auto" colorScheme="blue" mr={3} onClick={onClose}>
									Close
								</Button>
							</Flex>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</div>
	);
};

export default NavItemsForDesktop;
