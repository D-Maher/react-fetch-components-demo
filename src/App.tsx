import React from 'react';
import { Root, Subtitle, Title } from './appStyles';
import DogDisplay from './components/DogDisplay';
import FetchDog from './components/FetchDog';

const App: React.FunctionComponent = () => (
  <Root>
    <Title>Fetchr</Title>
    <Subtitle>
      It's about time <em>we</em> did some fetching
    </Subtitle>
    <FetchDog>
      <DogDisplay />
    </FetchDog>
  </Root>
);

export default App;
