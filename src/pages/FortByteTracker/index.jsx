import React from 'react'
import { useAsync, Pending, Fulfilled, Rejected  } from 'react-async';
import Container from '@material-ui/core/Container';
import { getFortBytes } from 'services/api/fortbytes';
import './styles.css';

const FortByteTrackerPage = () => {
  const state = useAsync({ promiseFn: getFortBytes });
  return (
  <div className="fortbyte-tracker__page">
    <Container>
      <Pending state={state}>Getting The Shit...</Pending>
      <Rejected state={state}>{error => <div>{error.message}</div>}</Rejected>
      <Fulfilled state={state}>{fortByteData => <div>{JSON.stringify(fortByteData)}</div>}</Fulfilled>
    </Container>
  </div>
);
}

export default FortByteTrackerPage;