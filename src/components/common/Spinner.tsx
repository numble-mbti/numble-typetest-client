import styled from 'styled-components';

export const Spinner = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  border: 7px solid #d6d6d6;
  border-radius: 50%;
  border-top-color: #1976d2;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
