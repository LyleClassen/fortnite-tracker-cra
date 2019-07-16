import React from 'react'
import { useAsync, Pending, Fulfilled, Rejected  } from 'react-async';
import styled from 'styled-components';
import { styled as mStyled } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import { getFortBytes } from 'services/api/fortbytes';
import backgroundImage from 'assets/images/background.jpg';
import Loader from './loader';
import FortByteListPage from './FortByteListPage';

const StyledPage = styled.div`
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  color: #2F4B8D;
  height: 100%;
  overflow: auto;
`;

const StyledContainer = mStyled(Container)({
  height: '100%',
})

const FortByteTrackerPage = () => {
  const state = useAsync({ promiseFn: getFortBytes });
  return (
  <StyledPage>
    <StyledContainer>
      <Pending state={state}>
        <Loader />
      </Pending>
      <Rejected state={state}>{error => 
        <div>{error.message}</div>
      }
      </Rejected>
      <Fulfilled state={state}>{fortByteData => 
        <FortByteListPage fortByteData={fortByteData}/>
      }
      </Fulfilled>
    </StyledContainer>
  </StyledPage>
);
}

export default FortByteTrackerPage;