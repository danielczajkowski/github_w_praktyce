import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: inline-block;
  width: 6.7rem;
  height: 6.7rem;
  border-radius: ${({ $circle }) => ($circle ? '50%' : '2rem')};
  border: none;
  cursor: pointer;
  background-image: url(${({ $icon }) => $icon});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme, $active }) => ($active ? theme.color.white : 'transparent')};
`;

export default ButtonIcon;
