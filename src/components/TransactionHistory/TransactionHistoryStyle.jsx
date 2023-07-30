import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.201);
  margin: 0 auto;
  margin-top: 50px;
  border-collapse: collapse;
  width: 80%;
  /* font-family: 'Comic Sans', cursive; */
  font-family: 'Chopin Script', cursive;
  color: white;
`;

export const Th = styled.th`
  background-color: #1884a8;
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: center;
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: center;
`;

export const TrEeven = styled.tr`
  background-color: rgb(216, 243, 248);
`;
