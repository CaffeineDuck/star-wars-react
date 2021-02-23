import { Heading, Menu } from '@chakra-ui/react'
import React from 'react'
import WithBackButtonLayout from '../../layouts/WithBack'

interface Props {
    
}

const MoreStarWars = (props: Props) => {
    return (
        <div>
            <Heading>
                Wanna know more about star wars? JUST WATCH THE FUCKING MOVIE!
            </Heading>
        </div>
    )
}

MoreStarWars.Layout = WithBackButtonLayout

export default MoreStarWars
