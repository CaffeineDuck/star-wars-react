import React, { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { Heading, Box, Grid, Skeleton, Button, Flex } from "@chakra-ui/react";
import { PlanetClass } from "../../utils/Types/Planets";
import PlanetCard from "../../components/PlanetCard";
import Error from "../../components/Error";
import WithBackButtonLayout from "../../layouts/WithBack";

const Planets = () => {
	const [pageNumber, setPageNumber] = useState(1);

	const fetchPlanets = async ({ pageParam = 1 }) => {
		console.log(`https://swapi.dev/api/planets/?page=${pageParam}`);
		const res = await fetch("https://swapi.dev/api/planets/?page=" + pageParam);
		return res.json();
	};

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		status,
		isFetching,
	} = useInfiniteQuery("planets", fetchPlanets, {
		getNextPageParam: (lastPage, pages) => pageNumber,
	});

	const onLoadMore = (e) => {
		setPageNumber(pageNumber + 1);
		fetchNextPage();
	};

	const randomArray = Array.from({ length: 10 }, () =>
		Math.floor(Math.random() * 100)
	);

	return (
		<div>
			<Heading size="lg" my="1rem">
				Planets
			</Heading>

			{status === "loading" && (
				<div>
					<Grid templateColumns="repeat(3, 1fr)" gap={6}>
						{randomArray.map((value, index) => (
							<Box key={index} rounded="lg">
								<Skeleton height={40} rounded="lg" />
							</Box>
						))}
					</Grid>
				</div>
			)}

			{status === "error" && <Error />}

			{status === "success" && (
				<div>
					<Grid templateColumns="repeat(3, 1fr)" gap={6}>
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

					<Flex>
						<Button
						my="1rem"
							placeSelf="center"
							mx="auto"
							onClick={onLoadMore}
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

Planets.Layout = WithBackButtonLayout;

export default Planets;
