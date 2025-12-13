import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default Paragraph;
