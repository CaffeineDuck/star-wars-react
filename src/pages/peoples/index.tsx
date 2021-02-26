import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Heading, Box, Grid, Skeleton, Button, Flex } from "@chakra-ui/react";
import Personcard from "../../components/Persons/PersonCard";
import Error from "../../components/utilities/Error";
import WithBackButtonLayout from "../../layouts/WithBack";
import Head from "next/head";
import { PeopleClass } from "../../utils/Types/People";

const randomArray = Array.from({ length: 10 }, () =>
	Math.floor(Math.random() * 100)
);

const Peoples = () => {
	const [pageNumber, setPageNumber] = useState(1);

	const fetchPeoples = async ({ pageParam = 1 }) => {
		const res = await fetch("https://swapi.dev/api/people/?page=" + pageParam);
		setPageNumber(pageNumber + 1);
		return res.json();
	};

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery("peoples", fetchPeoples, {
		getNextPageParam: (lastPage, pages) =>
			pageNumber <= lastPage.count / 10 ? pageNumber : undefined,
	});

	return (
		<div>
			<Head>
				<title>Star Wars Peoples</title>
			</Head>

			<Heading size="lg" my="1rem">
				Peoples
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
								{group.results.map((person: PeopleClass, index: number) => (
									<React.Fragment key={index}>
										<Personcard person={person} />
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

Peoples.Layout = WithBackButtonLayout;

export default Peoples;
