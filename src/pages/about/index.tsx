import { Heading, Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import WithBackButtonLayout from '../../layouts/WithBack'

interface Props {
    
}

const About = (props: Props) => {
    return (
        <div>
			<Flex>
				<Heading placeSelf="center" mx="auto" mt="35vh">
                This is a site to get info about Star Wars
            </Heading>
			</Flex>

        </div>
    )
}

About.Layout = WithBackButtonLayout

export default About
