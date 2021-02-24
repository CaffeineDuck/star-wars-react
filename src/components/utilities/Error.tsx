import React from "react";
import {
	Heading,
	Box,
	Center,
	useColorMode,
	Text,
} from "@chakra-ui/react";

interface Props {
	headingText?: string;
	headingColor?: string[];
	extraText?: string;
	extraTextColor?: string;
}

const Error: React.FC<Props> = ({
	headingColor,
	headingText,
	extraTextColor,
	extraText,
}) => {

	const {colorMode} = useColorMode()

	return (
		<div>
			<Box placeItems="center" my="40vh" mx="auto">
				<Center>
					<Heading color={colorMode === 'light'? headingColor[0]: headingColor[1]}>{headingText}</Heading>
					{extraText && <Text color={extraTextColor}></Text>}
				</Center>
			</Box>
		</div>
	);
};

Error.defaultProps = {
	headingText: "An Error Occured!",
	headingColor: ['heading', 'yellow'],
	extraText: null,
	extraTextColor: "grey",
};

export default Error;
