import styled, { css } from 'styled-components';
import magnifireIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 1.5rem 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.color.grey100};
  border-radius: 5rem;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.grey300};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  ${({ $search }) =>
    $search &&
    css`
      padding: 1rem 2rem 1rem 4rem;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifireIcon});
      background-size: 1.5rem;
      background-repeat: no-repeat;
      background-position: 1.5rem center;
    `}
`;

export default Input;
