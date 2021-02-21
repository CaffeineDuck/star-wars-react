import React from "react";
import { useQuery } from "react-query";
import {
	Heading,
	Text,
	Box,
	Grid,
	Skeleton,
	SkeletonText,
	SkeletonCircle,
} from "@chakra-ui/react";
import { PlanetClass } from "../../components/utils/Types/Planets";
import PlanetCard from "../../components/PlanetCard";

const Planets = () => {
	const fetchPlanets = async () => {
		const res = await fetch("https://swapi.dev/api/planets/");
		return res.json();
	};

	const { data, status } = useQuery("planets", fetchPlanets);
	const randomArray = Array.from({ length: 10 }, () =>
		Math.floor(Math.random() * 100)
	);

	return (
		<div>
			<Heading size="lg" my="2rem">
				Planets
			</Heading>

			{status === "loading" && (
				<div>
					<Grid templateColumns="repeat(3, 1fr)" gap={6}>
						{randomArray.map((value, index) => (
							<Box key={index} rounded="lg">
								<Skeleton height={40} rounded="lg" />
								{/* <SkeletonText noOfLines={4} mt={4} /> */}
							</Box>
						))}
					</Grid>
				</div>
			)}

			{status === "error" && <Text>Error fetching data!</Text>}

			{status === "success" && (
				<Grid templateColumns="repeat(3, 1fr)" gap={6}>
					{data.results.map((planet: PlanetClass) => (
						<PlanetCard key={planet.name} planet={planet} />
					))}
				</Grid>
			)}

			{status === "idle" && <Text>Gay</Text>}
		</div>
	);
};

export default Planets;
