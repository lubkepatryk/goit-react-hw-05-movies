import styled from 'styled-components';

export const Details = styled.div`
box-shadow: 0px 5px 10px -8px rgba(66, 68, 90, 1);
  article {
    display: flex;
    gap: 20px;
    align-items: start;
    box-shadow: 0px 5px 10px -8px rgba(66, 68, 90, 1);
  }

  h2 {
    margin: 0 20px 20px 0;
    font-size: 1.5rem;
    span {
      font-size: 1.3rem;
    }
  }
  h3 {
    margin: 30px 0 0;
    font-size: 1.3rem;
    span {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;