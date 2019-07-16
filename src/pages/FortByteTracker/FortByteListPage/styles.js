import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';

export const StyledFortByteListPage = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 10px;
  }

  @media ${breakpoints.mobileS} {
    padding: 10px 0;  
  }

  @media ${breakpoints.tablet} {
    padding: 10px 10%;  
  }

  @media ${breakpoints.laptop} {
    padding: 10px 20%;  
  }
`;

export const StyledFortByteImg = styled.img`
  width: 200px;
`;

export const ImageHeader = styled.div`
  display: flex; 
  flex-direction: column;
  text-align: center;
  font-size: 2rem;
`;