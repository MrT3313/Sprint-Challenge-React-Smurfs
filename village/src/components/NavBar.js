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
    constructor(props) {
        super(props)

    }
    
    handler_NavClick(path) {
        console.log(`Clicked -- goto ${path}`)
    }

    render() {
        return (
            <Styles_nav>
                <button
                    onClick={ () => this.handler_NavClick('/') }
                >Link 1</button>
                <button
                    onClick={ () => this.handler_NavClick('/smurf-form') }
                >Link 2</button>
            </Styles_nav>
        );
    }
}


