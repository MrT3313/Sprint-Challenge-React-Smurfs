// Dependencies
    import React, { Component } from 'react';
    import { NavLink } from 'react-router-dom';

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

    render() {
        return (
            <Styles_nav>
                <NavLink to='/'>Home
                </NavLink>
                <NavLink to='/smurf-form'>Form
                </NavLink>
            </Styles_nav>
        );
    }
}


