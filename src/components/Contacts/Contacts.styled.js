import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  list-style: none;
  padding-left: 10px;

  font-size: 20px;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
`;

export const ContactName = styled.p`
  margin-right: 15px;
`;

export const ContactNumber = styled.a`
  text-decoration: none;
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  color: red;
  background: transparent;
  border: 1px grey solid;
`;
