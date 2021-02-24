import React from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const BackButton = () => {
	const router = useRouter();
	const clickHandler = () => {
		router.back();
	};

	return (
		<Button onClick={clickHandler} leftIcon={<ArrowLeftIcon />} mb="1rem" size="sm">
			Back
		</Button>
	);
};

export default BackButton;
