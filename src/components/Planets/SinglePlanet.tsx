import {
	Heading,
	Center,
	Table,
	Thead,
	Tr,
	Th,
	Td,
	Tbody,
	useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { PlanetClass } from "../../utils/Types/Planets";

interface Props {
	planetData: PlanetClass;
}

const SinglePlanet: React.FC<Props> = ({ planetData }) => {
	return (
		<div>
			<Center>
				<Heading color={useColorModeValue('heading.light', 'heading.dark')} mb="2rem">{planetData.name}</Heading>
			</Center>

			<Heading size="md" mb="1rem">More about {planetData.name}:</Heading>
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
						<Td>Population</Td>
						<Td>{planetData.population}</Td>
						<Td>Creatures</Td>
					</Tr>
					<Tr>
						<Td>Gravity</Td>
						<Td>{planetData.gravity}</Td>
						<Td>N/A</Td>
					</Tr>
					<Tr>
						<Td>Rotation Period</Td>
						<Td>{planetData.rotation_period}</Td>
						<Td>Days</Td>
					</Tr>
					<Tr>
						<Td>Surface Water</Td>
						<Td>{planetData.surface_water}</Td>
						<Td>%</Td>
					</Tr>
					<Tr>
						<Td>Terrian</Td>
						<Td>{planetData.terrain}</Td>
						<Td>N/A</Td>
					</Tr>
					<Tr>
						<Td>Climate</Td>
						<Td>{planetData.climate}</Td>
						<Td>N/A</Td>
					</Tr>
				</Tbody>
			</Table>
			
		</div>
	);
};

export default SinglePlanet;
