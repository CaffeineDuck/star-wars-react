import { LayoutProps } from '../utils/Props'
import React from 'react'
import {Box} from '@chakra-ui/react'
import Header from '../components/Header'

interface Props {
    
}

const BaseLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <Box mx="9.9375rem">
                <Header />
                {children}
            </Box>
        </div>
    )
}

export default BaseLayout
