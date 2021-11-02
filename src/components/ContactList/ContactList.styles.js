import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border-color: aliceblue;
  cursor: pointer;
  border-radius: 5px;
  background-color: #47dca9;
  margin-left: 25px;
  &:focus {
    border-color: #21ce3b;
  }
`;
