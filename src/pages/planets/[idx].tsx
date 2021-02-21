import { Box, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Error from "../../components/Error";
import { PlanetClass } from "../../utils/Types/Planets";
import Head from "next/head";

const Planet = () => {
	const router = useRouter();
	const { idx } = router.query;

	const fetchPlanet = async () => {
		const res = await fetch(`https://swapi.dev/api/planets/${idx}`);
		return res.json();
	};

	const response = useQuery("singlePlanet", fetchPlanet);
	const planetData: PlanetClass = response.data;
	const status: string = response.status;

	return (
		<div>
			<Head>
				<title>Planet Data</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					http-equiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				></meta>
			</Head>

			{status === "loading" && (
				<div>
					<Box rounded="lg">
						<Skeleton height={300} rounded="lg" />
						<SkeletonText noOfLines={20} mt={4} />
					</Box>
				</div>
			)}

			{status === "error" && <Error />}

			{status === "success" && (
				<div>
					<Head>
						<title>{`${planetData.name}`}</title>
					</Head>

					<Text>{planetData.name}</Text>
				</div>
			)}
		</div>
	);
};

export default Planet;
