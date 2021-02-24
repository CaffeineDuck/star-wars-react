import { Box, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Error from "../../components/utilities/Error";
import { PlanetClass } from "../../utils/Types/Planets";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import WithBackButtonLayout from "../../layouts/WithBack";
import SinglePlanet from "../../components/Planets/SinglePlanet";

interface Props {
	pid: string;
}

const Planet = (props: Props) => {
	const router = useRouter();
	const idx = router.query.pid || props.pid;

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
				<meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
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

					<SinglePlanet planetData={planetData}/>
				</div>
			)}
		</div>
	);
};

// Using getInitialProps didn't work in static sites so using getStaticProps and getStaticPaths!
/*
Planet.getInitialProps = async ({query}) => {
	return {props: {pid: query.pid}}
}
*/

// Using getStaticProps and getStaticPaths (Works well in static sites!)

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			pid: context.params.pid,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const endValue = parseInt(
		(await (await fetch("https://swapi.dev/api/planets/")).json()).count
	);
	let paths = [];

	for (let i = 1; i <= endValue; i++) {
		paths.push({ params: { pid: i.toString() } });
	}
	return {
		paths,
		fallback: false,
	};
};

Planet.Layout = WithBackButtonLayout;

export default Planet;
