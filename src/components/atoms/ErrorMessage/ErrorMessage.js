import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const ErrorMessage = styled(Paragraph).attrs({ className: 'input_error' })`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.error};
  margin-top: -2rem;
  margin-bottom: 0;
  padding-left: 1rem;

  &:not(:last-child) {
    margin-bottom: 0;
  }
`;

export default ErrorMessage;
