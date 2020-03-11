import styled from 'styled-components';

export const FriendElement = styled.li`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  width: 350px;
  min-height: 100px;
  box-shadow: 0px 2px 5px 0px rgba(191, 205, 222, 0.75);
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
`;

export const Status = styled.div`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-left: 20px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-left: 20px;
`;

export const FriendName = styled.p`
  font-size: 25px;
  margin: 0;
  margin-left: 20px;
`;
