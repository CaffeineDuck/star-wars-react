import { Heading } from '@chakra-ui/react'
import React from 'react'
import WithBackButtonLayout from '../../layouts/WithBack'
import Person from '../peoples'

interface Props {
    
}

const About = (props: Props) => {
    return (
        <div>
            <Heading>
                Hi I am someone so fuck off
            </Heading>
        </div>
    )
}

About.Layout = WithBackButtonLayout

export default About
