import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  text-align: center;
  font-size: 10rem;

  & > p {
    color: red;
    font-size: 2rem;
  }
`;

const ErrorMessage: React.FunctionComponent<{ error: string }> = ({ error }) => (
  <Root>
    <span role="img" aria-label="sad face">
      😵
    </span>
    <p>{error}</p>
  </Root>
);

export default ErrorMessage;
