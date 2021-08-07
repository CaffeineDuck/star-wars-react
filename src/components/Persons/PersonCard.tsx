import {
	Box,
	Badge,
	Container,
	Text,
	LinkBox,
	LinkOverlay,
	Link,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { PeopleClass } from "../../utils/Types/People";

interface Props {
	person: PeopleClass;
}

const PersonCard = ({ person }: Props) => {
	const [personId, _] = person.url.split("/").slice(-2);

	return (
		<div>
			<LinkBox
				maxW="sm"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
				_groupHover={{ shadow: "small" }}
			>
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						<Badge as="a" borderRadius="full" px="2" colorScheme="teal">
							Person
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
						<NextLink href={`/peoples/${personId}`} passHref>
							<LinkOverlay>{person.name}</LinkOverlay>
						</NextLink>
					</Box>

					<Container
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="sm"
					>
						<Text>
							&bull; HomeWorld:{" "}
							<NextLink
								href={"/planets/" + person.homeworld.split("/").slice(-2)[0]}
								passHref
							>
								<Link color="blue.300" as="a">
									Click Here
								</Link>
							</NextLink>
						</Text>
						<Text>&bull; DOB: {person.birth_year}</Text>
						<Text>&bull; Gender: {person.gender}</Text>
						<Text>&bull; Mass: {person.mass}</Text>
					</Container>
				</Box>
			</LinkBox>
		</div>
	);
};

export default PersonCard;
