import styled from 'styled-components';

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid black;
  margin-top: 20px;
`;

export const ProfileDiv = styled.div`
  border: 1px solid grey;
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  padding: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

export const Name = styled.p`
  margin: 5px;
  font-weight: bold;
  font-size: larger;
`;

export const Location = styled.p`
  margin: 5px;
  color: grey;
  font-size: larger;
`;

export const Tag = styled.p`
  margin: 5px;
  color: grey;
  font-size: larger;
`;

export const Item = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  border: 1px solid grey;
  width: 70px;
  padding: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  /* border: 1px solid grey; */
`;

export const Label = styled.span`
  color: grey;
`;
