import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bestfriendsGif from 'assets/images/gifs/bestfriends.gif';
import TextElipses from 'components/Text-Elipses';

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLoaderContainer = styled.div`
  display: flex; 
  flex-direction: column;
  margin-top: 30px;
`;

const StyledLoadingText = styled.div`
  text-align: center;
  font-size: 3rem;
  color: white;
  text-shadow: 1px 1px 2px black;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const StyledLoaderPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Loader = ({ loadingText }) => (
  <StyledLoaderPage>
    <FlexCenter>
      <StyledLoaderContainer>
        <img src={bestfriendsGif} alt="Loading Gif..." />
      </StyledLoaderContainer>
    </FlexCenter>
    <StyledFooter>
      <StyledLoadingText>{loadingText}<TextElipses /></StyledLoadingText>
    </StyledFooter>
  </StyledLoaderPage>
);

Loader.defaultProps = {
  loadingText: 'Loading',
}

Loader.propTypes = {
  loadingText: PropTypes.string.isRequired,
}

export default Loader;