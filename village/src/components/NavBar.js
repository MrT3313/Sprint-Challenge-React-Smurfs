// Dependencies
    import React, { Component } from 'react';

// Styled Components
    import styled from 'styled-components'

const Styles_nav = styled.div`
    display: flex;
    justify-content: center;

    background: pink;
`;

export default class NavBar extends Component {
    render() {
    return (
        <Styles_nav>
            <button>Link 1</button>
            <button>Link 2</button>
        </Styles_nav>
    );
    }
}


