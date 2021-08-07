import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Heading, Box, Grid, Skeleton, Button, Flex } from "@chakra-ui/react";
import { PlanetClass } from "../../utils/Types/Planets";
import PlanetCard from "../../components/Planets/PlanetCard";
import Error from "../../components/utilities/Error";
import WithBackButtonLayout from "../../layouts/WithBack";
import Head from "next/head";

const randomArray = Array.from({ length: 10 }, () =>
	Math.floor(Math.random() * 100)
);

const Planets = () => {
	const fetchPlanets = async ({ pageParam = 1 }) => {
		const res = await fetch("https://swapi.dev/api/planets/?page=" + pageParam);
		return res.json();
	};

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useInfiniteQuery("planets", fetchPlanets, {
			getNextPageParam: (lastPage, pages) => lastPage.next.slice(-1),
		});

	return (
		<div>
			<Head>
				<title>Star Wars Planets</title>
			</Head>

			<Heading size="lg" my="1rem">
				Planets
			</Heading>

			{status === "loading" && <Loading />}

			{status === "error" && <Error />}

			{status === "success" && (
				<div>
					<Grid
						templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
						gap={6}
					>
						{data.pages.map((group: any, index: number) => (
							<React.Fragment key={index}>
								{group.results.map((planet: PlanetClass, index: number) => (
									<React.Fragment key={index}>
										<PlanetCard planet={planet} />
									</React.Fragment>
								))}
							</React.Fragment>
						))}
					</Grid>

					{isFetchingNextPage && <Loading />}

					<Flex>
						<Button
							my="1rem"
							placeSelf="center"
							mx="auto"
							onClick={() => fetchNextPage()}
							disabled={!hasNextPage || isFetchingNextPage}
						>
							{isFetchingNextPage
								? "Loading more..."
								: hasNextPage
								? "Load More"
								: "Nothing more to load"}
						</Button>
					</Flex>
				</div>
			)}
		</div>
	);
};

const Loading = () => (
	<div>
		<Grid
			templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
			gap={6}
		>
			{randomArray.map((value, index) => (
				<Box key={index} rounded="lg">
					<Skeleton height={40} rounded="lg" />
				</Box>
			))}
		</Grid>
	</div>
);

Planets.Layout = WithBackButtonLayout;

export default Planets;
