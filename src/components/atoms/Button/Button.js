import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, color }) => color || theme.color.notes};
  border: 2px solid ${({ theme, color }) => color || theme.color.notes};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease-in-out;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};

  ${({ $secondary }) =>
    $secondary &&
    css`
      background-color: ${({ theme, color }) => color || theme.color.grey200};
      border: 2px solid ${({ theme, color }) => color || theme.color.grey200};
      width: ${({ width }) => width || '105px'};
      height: 30px;
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `}

  &:hover {
    background-color: transparent;
  }
`;

export default Button;
