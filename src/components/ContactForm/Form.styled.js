import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px 40px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LabelText = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  margin-top: 0;
  margin-bottom: 10px;
  width: 300px;
  height: 20px;
`;
export const FormButton = styled.button`
  width: 200px;
  height: 40px;

  font-size: 16px;
  font-weight: 500;

  background-color: white;
  color: black;
  border-radius: 5px;

  &:hover {
    background-color: green;
    color: white;
  }
`;
