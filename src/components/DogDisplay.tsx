import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ReduxStore } from '../ducks';

const DogPic = styled.img`
  border-radius: 1.5rem;
  max-height: 50rem;
`;

const DogDisplay: React.FunctionComponent<{ dogPicSrc: string }> = ({ dogPicSrc }) => (
  <DogPic src={dogPicSrc} alt="doggo" />
);

const mapDispatchToProps = (state: ReduxStore) => ({
  dogPicSrc: state.dogs.dogPicSrc,
});

export default connect(mapDispatchToProps)(DogDisplay);
