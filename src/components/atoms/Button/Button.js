import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, color }) => color || theme.color.note};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 50px;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ $secondary }) =>
    $secondary &&
    css`
      background-color: ${({ theme, color }) => color || theme.color.grey200};
      width: ${({ width }) => width || '105px'};
      height: 30px;
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `}
`;

export default Button;
