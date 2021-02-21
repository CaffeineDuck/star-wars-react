import { Box, Heading, Image, Badge, Container, Text } from "@chakra-ui/react";
import React from "react";
import { PlanetClass } from "../utils/Types/Planets";
import NextLink from 'next/link'

interface Props {
	planet: PlanetClass;
}

const PlanetCard = (props: Props) => {
  const [planetId, _] = props.planet.url.split('/').slice(-2)

	return (
		<div>
      {console.log(planetId)}
			<Box
				maxW="sm"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
			>
				<Box p="6">
					<Box d="flex" alignItems="baseline">
            <Badge as="a" borderRadius="full" px="2" colorScheme="teal">
                Planet
            </Badge>
					</Box>

					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated
            fontSize="lg"
					>
            <NextLink href={`/planets/${planetId}`} passHref>
              <Text as="a">
                {props.planet.name}
              </Text>
            </NextLink>
					</Box>

					<Container
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="sm"
					>
						<Text>&bull; Diameter: {props.planet.diameter}</Text>
						<Text>&bull; Orbital Period: {props.planet.orbital_period} Days</Text>
						<Text>&bull; Climate: {props.planet.climate}</Text>
						<Text>&bull; Water: {props.planet.surface_water}% Covered In Water</Text>
					</Container>
				</Box>
			</Box>
		</div>
	);
};

export default PlanetCard;
