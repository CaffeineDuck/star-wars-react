import {
	Box,
	Skeleton,
	SkeletonText,
	Text
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Error from "../../components/Error";
import {PlanetClass} from '../../components/utils/Types/Planets'

interface Props {
	planetObject?: PlanetClass
}

const Planet = (props: Props) => {
	const router = useRouter();
	const { idx } = router.query;

	const fetchPlanet = async () => {
		const res = await fetch(`https://swapi.dev/api/planets/${idx}`);
		return res.json();
	};


	const response = useQuery("planets", fetchPlanet)
	const planetData: PlanetClass = props.planetObject || response.data
	const status: string = response.status || 'success'

	return (
		<div>
			{status === "loading" && (
				<div>
					<Box rounded="lg">
						<Skeleton height={100} rounded="lg" />
						<SkeletonText noOfLines={20} mt={4} />
					</Box>
				</div>
			)}
			{status === "error" && (
				<Error />
			)}
			{status === "success" && (
				<Text>
					{planetData.name}
				</Text>
			)}
		</div>
	);
};

export default Planet;
