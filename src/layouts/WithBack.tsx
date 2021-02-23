import React from 'react'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import { LayoutProps } from '../utils/Props'


const WithBackButtonLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <BackButton/>
            {children}
        </div>
    )
}

export default WithBackButtonLayout
