import styled from "@emotion/styled";

export const BlankPhonebook = styled.form`
  border: 5px solid #21ce3b;
  width: 400px;
  margin: 0 auto;
  padding: 25px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  margin-bottom: 25px;
`;

export const Input = styled.input`
  border: 3px solid #48dca9;
  border-radius: 5px;
  width: 300px;
  margin-left: 15px;
  &:focus {
    background-color: #47dca9;
  }
`;

export const Button = styled.button`
  border-color: aliceblue;
  border-radius: 5px;
  cursor: pointer;
  background-color: #47dca9;
  width: 95px;
  &:focus {
    border-color: #21ce3b;
  }
`;
