import PropTypes from 'prop-types';

import styled, { css, keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem as removeItemAction } from 'actions';
import { usePageType } from 'hooks/usePageType';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import linkIcon from 'assets/icons/link.svg';

import { humanizeDate } from 'hooks/humanizeDate';

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
  cursor: pointer;
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
  background-color: ${({ theme }) => theme.color.twitters};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  right: 1.5rem;
  top: 1rem;
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

const Card = ({
  id,
  title,
  createdAt,
  content,
  articleUrl,
  avatarUrl,
  twitterName,
  removeItem,
}) => {
  const pageType = usePageType();

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${pageType}/${id}`);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const handleRemoveButtonClick = (e) => {
    e.stopPropagation();
    removeItem(pageType, id);
  };

  return (
    <StyledWrapper onClick={handleCardClick}>
      <InnerWrapper $activeColor={pageType}>
        <StyledHeading>{title}</StyledHeading>
        {createdAt && <DateInfo>{humanizeDate(createdAt)}</DateInfo>}

        {pageType === 'articles' && (
          <StyledLink
            as="a"
            target="_blank"
            $icon={linkIcon}
            $active
            $circle
            href={articleUrl}
            onClick={handleLinkClick}
          />
        )}
        {pageType === 'twitters' && (
          <StyledAvatar>
            <img src={avatarUrl} alt={`${twitterName || 'Twitter account'} avatar`} />
          </StyledAvatar>
        )}
      </InnerWrapper>
      <InnerWrapper $flex>
        <Paragraph>{content}</Paragraph>
        <Button $secondary onClick={handleRemoveButtonClick}>
          remove
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);

Card.propTypes = {
  _id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};
