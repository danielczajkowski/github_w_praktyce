import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  font-size: 16px;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ color }) => color || 'hsl(0, 0%, 90%)'};
      width: ${({ width }) => width || '105px'};
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
