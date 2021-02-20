import { Box, Heading, Image, Badge } from "@chakra-ui/react";
import React from "react";
import { PlanetClass } from "./utils/Types/Planets";

interface Props {
  planet: PlanetClass;
}

const PlanetCard = (props: Props) => {
  return (
    <div>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        my="1rem"
      >
        <Image
          src="https://picsum.photos/1024"
          alt={`${props.planet.name}'s image`}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Planet
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {props.planet.population} Population
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.planet.name}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PlanetCard;
