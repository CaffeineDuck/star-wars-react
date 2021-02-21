import { Box, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Error from "../../components/Error";
import { PlanetClass } from "../../components/utils/Types/Planets";
import { stat } from "fs";

const Planet = () => {
	const router = useRouter();
	const { idx } = router.query;

	const fetchPlanet = async () => {
		const res = await fetch(`https://swapi.dev/api/planets/${idx}`);
		return res.json();
	};

	const response = useQuery('singlePlanet', fetchPlanet);
	const planetData: PlanetClass = response.data;
	const status: string = response.status;

	return (
		<div>
			{status === "loading" || status === 'idle' && (
				<div>
					<Box rounded="lg">
						<Skeleton height={100} rounded="lg" />
						<SkeletonText noOfLines={20} mt={4} />
					</Box>
				</div>
			)}
			{status === "error" && <Error />}

			{status === "success" && <Text>{planetData.name}</Text>}
		</div>
	);
};

export default Planet;
