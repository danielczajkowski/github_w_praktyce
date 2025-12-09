import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ffd82d;
  width: ${({ width }) => width || '220px'};
  height: 47px;
  font-size: 16px;
  border-radius: 50px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: ${({ width }) => width || '105px'};
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
