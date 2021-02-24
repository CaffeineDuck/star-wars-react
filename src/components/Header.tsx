import React from 'react'
import NavBar from './NavBar/NavBar'
import TopLoadingBar from './TopLoadingBar'

const Header = () => {
    return (
        <div>
            <TopLoadingBar />
            <NavBar />
        </div>
    )
}

export default Header
