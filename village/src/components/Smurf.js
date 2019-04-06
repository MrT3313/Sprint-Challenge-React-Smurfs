// DEPENDENCIES
  import React from 'react';

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

const Smurf = props => {
  return (
    <SmurfCard className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <RemoveSmurf_icon>
        <i class="far fa-trash-alt"></i>
      </RemoveSmurf_icon>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

