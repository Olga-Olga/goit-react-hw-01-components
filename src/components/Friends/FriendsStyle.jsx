import styled from 'styled-components';

export const Item = styled.li`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  width: 200px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px auto;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 400ms ease, transform 400ms ease;
  &:hover {
    cursor: pointer;
    background-color: #f5cad2b2;
    transform: scale(1.2);
  }
`;

export const Status = styled.span`
  content: '';
  width: 15px;
  height: 15px;
  /* background-color: $isActiveColor; */
  background-color: red;
  border-radius: 50%;
  display: block;
  margin-left: 10px;
`;

export const FriendListUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 50px;
`;
