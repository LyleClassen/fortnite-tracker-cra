import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bestfriendsGif from 'assets/images/gifs/bestfriends.gif';

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLoaderContainer = styled.div`
  display: flex; 
  flex-direction: column;
`;

const StyledLoadingText = styled.div`
  text-align: center;
  font-size: 3rem;
`;

const Loader = ({ loadingText }) => (
  <FlexCenter>
    <StyledLoaderContainer>
      <img src={bestfriendsGif} alt="Loading Gif..." />
      <StyledLoadingText>{loadingText}</StyledLoadingText>
    </StyledLoaderContainer>
  </FlexCenter>
);

Loader.defaultProps = {
  loadingText: 'Loading...',
}

Loader.propTypes = {
  loadingText: PropTypes.string.isRequired,
}

export default Loader;