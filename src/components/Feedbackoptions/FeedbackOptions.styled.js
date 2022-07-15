import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 100px;
  padding: 14px 0;
  border-radius: 4px;
  background-color: #5f5252;
  text-transform: capitalize;
  font-weight: 600;
  color: #fff;
  &:active{
    background-color: lightseagreen;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
