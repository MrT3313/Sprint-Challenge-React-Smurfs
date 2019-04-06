// DEPENDENCIES
  import React from 'react';

//STYLED COMPONENTS
  import styled from 'styled-components'

const SmurfCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;

  margin-bottom: 20px;

  background: #88CCFF;
  border: 3px dashed black;
`;

const Smurf = props => {
  return (
    <SmurfCard className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

