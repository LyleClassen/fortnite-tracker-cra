import React from 'react'
import { useAsync, Pending, Fulfilled, Rejected  } from 'react-async';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { getFortBytes } from 'services/api/fortbytes';
import Loader from './loader';
import FortByteListPage from './FortByteListPage';

const StyledPage = styled.div`
  background-color: #12244E;
  color: #8AB7F3;
  height: 100%;
`;

const FortByteTrackerPage = () => {
  const state = useAsync({ promiseFn: getFortBytes });
  return (
  <StyledPage>
    <Container>
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
    </Container>
  </StyledPage>
);
}

export default FortByteTrackerPage;