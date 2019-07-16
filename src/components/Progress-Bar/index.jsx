import React from 'react';
import styled from 'styled-components';

const StyledProgressContainer = styled.div`
  background-color: #000D4D;
  height: ${({hieght}) => hieght}px;
  width: 100%;
  border: 1px solid #000D4D;
`;

const StyledProgressFiller = styled.div`
  height: ${({hieght}) => hieght}px;
  width: ${({value}) => value}%;
  background-color: #81A3DE;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: width .2s ease-in;
`;

const StyledCompletedText = styled.div`
  display: table-cell;
  padding: 0 10px;
  font-size: 1.3rem;
`

const ProgressBar = ({ value, hieght, className }) => (
  <StyledProgressContainer hieght={hieght} className={className}>
    <StyledProgressFiller hieght={hieght} value={value}>
      <StyledCompletedText>{value}</StyledCompletedText>
    </StyledProgressFiller>
  </StyledProgressContainer>
);

ProgressBar.defaultProps = {
  hieght: 30,
}

export default ProgressBar;