import styled from "@emotion/styled";

export const Form = styled.form`
  width: 290px;
  margin: 0 auto;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  &:focus-within input {
    border: 2px solid #67c233;
    outline: transparent;
  }
`;

export const LabelText = styled.span`
  text-align: left;
  padding-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 40px;
  padding: 8px;
  font-size: 18px;
  color: #212121;
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  &::placeholder {
    color: rgba(117, 117, 117, 0.5);
    font-size: 14px;
    line-height: 1.14;
  }
`;
