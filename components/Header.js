import React from 'react';
import Link from 'next/Link';
import styled from 'styled-components';

const Header = styled.header`
    text-align: center;
    padding: 1em;
    border-bottom: 1px solid #dcdcdc
`

const Navbar = () => {

    return(
        <Header>
            <Link href="/">
                <h1>Pokemon App</h1>
            </Link>
        </Header>
    )
}

export default Navbar;