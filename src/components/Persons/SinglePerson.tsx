import {
	Heading,
	Center,
	Table,
	Thead,
	Tr,
	Th,
	Td,
	Tbody,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import React from "react";
import { PeopleClass } from "../../utils/Types/People";
import NextLink from "next/link";

interface Props {
	peopleData: PeopleClass;
}

const SinglePlanet: React.FC<Props> = ({ peopleData }) => {
	return (
		<div>
			<Center>
				<Heading
					color={useColorModeValue("heading.light", "heading.dark")}
					mb="2rem"
				>
					{peopleData.name}
				</Heading>
			</Center>

			<Heading size="md" mb="1rem">
				More about {peopleData.name}:
			</Heading>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th>Info</Th>
						<Th>Data</Th>
						<Th>Unit</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>DOB</Td>
						<Td>{peopleData.birth_year}</Td>
						<Td>N/A</Td>
					</Tr>
					<Tr>
						<Td>Eye Color</Td>
						<Td>{peopleData.eye_color}</Td>
						<Td>N/A</Td>
					</Tr>
					<Tr>
						<Td>Hair Color</Td>
						<Td>{peopleData.hair_color}</Td>
						<Td>N/A</Td>
					</Tr>
					<Tr>
						<Td>Skin Color</Td>
						<Td>{peopleData.skin_color}</Td>
						<Td>N/A</Td>
					</Tr>
					<Tr>
						<Td>Mass</Td>
						<Td>{peopleData.mass}</Td>
						<Td>KG</Td>
					</Tr>
					<Tr>
						<Td>Gender</Td>
						<Td>{peopleData.gender}</Td>
						<Td>N/A</Td>
					</Tr>
					<Tr>
						<Td>Home Planet</Td>
						<Td color="blue.300">
							<NextLink
								href={
									"/planets/" + peopleData.homeworld.split("/").slice(-2)[0]
								}
								passHref
							>
								<Link as="a"> Click Here</Link>
							</NextLink>
						</Td>
						<Td>N/A</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	);
};

export default SinglePlanet;
