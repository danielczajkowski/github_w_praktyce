import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import linkIcon from 'assets/icons/link.svg';

const fadeIn = keyframes`
  from {
    transform: translateY(2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  min-height: 38rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-rows: 8rem 1fr;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 1.7rem 3rem;
  background-color: ${({ $activeColor, theme }) =>
    $activeColor ? theme.color[$activeColor] : theme.color.white};

  ${({ $flex }) =>
    $flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledAvatar = styled.div`
  width: 9.1rem;
  height: 9.1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.twitter};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  right: 2.5rem;
  top: 2.5rem;
  border-radius: 50%;
  z-index: 1;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

const StyledLink = styled(ButtonIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: 5rem;
  height: 5rem;
`;

const Card = ({ cardType = 'note' }) => (
  <StyledWrapper>
    <InnerWrapper $activeColor={cardType}>
      <StyledHeading>Card title</StyledHeading>
      <DateInfo>3 days</DateInfo>

      {cardType === 'article' && <StyledLink icon={linkIcon} active circle href="#" />}
      {cardType === 'twitter' && (
        <StyledAvatar>
          <img src="https://unavatar.io/eduweb.pl" alt="Avatar" />
        </StyledAvatar>
      )}
    </InnerWrapper>
    <InnerWrapper $flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </Paragraph>
      <Button $secondary>remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};
