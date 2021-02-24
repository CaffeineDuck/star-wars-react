import { LayoutProps } from '../utils/Props'
import React from 'react'
import {Box} from '@chakra-ui/react'
import Header from '../components/Header'

const BaseLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <Box mx={["1rem", "1.5rem", "2rem", "9.9375rem"]}>
                <Header />
                {children}
            </Box>
        </div>
    )
}

export default BaseLayout
