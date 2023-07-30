import styled from 'styled-components';

export const Title = styled.h2`
  font-size: large;
  width: 0 auto;
  /* align-items: center; */
`;

export const Statlist = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60px;
  height: 60px;
  align-items: center;
  color: white;
`;

export const Section = styled.section`
  align-items: center;
  border: 1px solid grey;
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
`;
