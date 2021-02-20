import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ColorModeSwitcher from "./ColorModeSwitcher";

interface Props {
  setPage: (page: string) => void;
}

const NavBar = (props: Props) => {
  const headingColor = useColorModeValue("heading", "yellow");

  return (
    <div>
      <Box py="1rem">
        <Box>
          <Flex>
            <Box>
              <Heading size="xl" textColor={headingColor}>
                Star Wars
              </Heading>
            </Box>
            <Spacer />
            <Box>
              <HStack spacing="1rem">
                <Button onClick={() => props.setPage("planets")}>
                  Planets
                </Button>
                <Button onClick={() => props.setPage("people")}>Peoples</Button>
              </HStack>
            </Box>
            <Spacer />
            <ColorModeSwitcher placeSelf="flex-end" pr="1rem" />
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default NavBar;
