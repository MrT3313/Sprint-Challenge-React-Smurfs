// DEPENDENCIES
  import React, { Component } from 'react';

//STYLED COMPONENTS
  import styled from 'styled-components'

const SmurfCard = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;

  margin-bottom: 20px;

  background: #88CCFF;
  border: 3px dashed black;
`;

const RemoveSmurf_icon = styled.div`\
  position: absolute;
  right: 10px;
  bottom: 10px

  :hover {
    font-size: 40px;
  }
`;

export default class Smurf extends Component {
  constructor(props) {
    super(props)
  }

  handler_TrashIconClick = e => {
    
    console.log('checking ID from <Smurf /> click handler')
    console.log(this.props.id)
    
    this.props.deleteSmurf(
      e,
      this.props.id
    )
  }
  
  render() {
    return (
      <SmurfCard className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <RemoveSmurf_icon
          onClick={this.handler_TrashIconClick}
        >
          <i class="far fa-trash-alt"></i>
        </RemoveSmurf_icon>
      </SmurfCard>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};


