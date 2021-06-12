import React from 'react';
import Navbar from '../components/Navbar';

const Layout = props => {

    return(
        <>
            <Navbar/>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout;