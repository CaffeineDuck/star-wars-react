import { Box, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Error from "../../components/utilities/Error";
import { PeopleClass } from "../../utils/Types/People";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import WithBackButtonLayout from "../../layouts/WithBack";
import SinglePerson from '../../components/Persons/SinglePerson'

interface Props {
	pid: string;
}

const People = (props: Props) => {
	const router = useRouter();
	const idx = router.query.pid || props.pid;

	const fetchPerson = async () => {
		const res = await fetch(`https://swapi.dev/api/people/${idx}`);
		return res.json();
	};

	interface planetResponse {
		data: PeopleClass;
		status: string;
	}

	const { data: personData, status: status }: planetResponse = useQuery(
		"singlePerson",
		fetchPerson
	) || { data: undefined, status: "loading" };

	return (
		<div>
			<Head>
				<title>People Data</title>
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
						<title>{`${personData.name} - Star Wars`}</title>
					</Head>

					<SinglePerson peopleData={personData}/>
				</div>
			)}
		</div>
	);
};


export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			pid: context.params.pid,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const endValue = parseInt(
		(await (await fetch("https://swapi.dev/api/people/")).json()).count
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

People.Layout = WithBackButtonLayout;

export default People;
