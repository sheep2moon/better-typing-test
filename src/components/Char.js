import React from 'react';
import styled from 'styled-components';

const Char = ({ isFocused, isCorrect, isIncorrect, children }) => {
  return (
    <StyledChar isEmpty={children === ' ' ? true : false} isFocused={isFocused}>
      {children}
    </StyledChar>
  );
};

export default Char;

const StyledChar = styled.span`
  padding: ${({ isEmpty }) => (isEmpty ? '0 1px' : '0')};
  box-shadow: ${({ isFocused, theme }) =>
    isFocused ? `-3px 0  ${theme.colors.accent}` : 'none'};
`;
