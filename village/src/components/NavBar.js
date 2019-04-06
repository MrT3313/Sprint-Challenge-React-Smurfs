// Dependencies
    import React, { Component } from 'react';
    import { NavLink } from 'react-router-dom';

// Styled Components
    import styled from 'styled-components'

const Styles_nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;

    .navLink {
        text-decoration: none;
        color: black;

        padding: 5px 10px;

        border: 1px dashed black;
    }

    background: #88CCFF;
`;

export default class NavBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Styles_nav>
                <NavLink 
                    to='/' 
                    className='navLink'>View Smurfs
                </NavLink>
                <NavLink 
                    to='/smurf-form' 
                    className='navLink'>Add Smurf
                </NavLink>
            </Styles_nav>
        );
    }
}


