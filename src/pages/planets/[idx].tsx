import { Box, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Error from "../../components/Error";
import { PlanetClass } from "../../utils/Types/Planets";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

interface Props {
	pid: string
}


const Planet = (props: Props) => {
	const router = useRouter();
	const idx = router.query.idx || props.pid;

	const fetchPlanet = async () => {
		const res = await fetch(`https://swapi.dev/api/planets/${idx}`);
		return res.json();
	};

	interface planetResponse {
		data: PlanetClass;
		status: string;
	}

	const { data: planetData, status: status }: planetResponse = useQuery(
		"singlePlanet",
		fetchPlanet
	) || { data: undefined, status: "loading" };

	return (
		<div>
			<Head>
				<title>Planet Data</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

Planet.getInitialProps = ({query}) => {
	return {props: {pid: query.idx}}
}

export default Planet;
