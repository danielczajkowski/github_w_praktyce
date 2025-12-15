import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes/routes';
import PropTypes from 'prop-types';

const StyledHeader = styled.div`\
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  position: relative;
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 0;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
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

const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const DetailsTemplate = ({
  pageType = 'notes',
  title,
  createdAt,
  content,
  avatarUrl,
  twitterName,
  articleUrl,
}) => {
  const navigate = useNavigate();

  return (
    <UserPageTemplate pageType={pageType}>
      <StyledHeader>
        <Heading $big>{title}</Heading>
        <DateInfo>{createdAt}</DateInfo>
        {pageType === 'twitters' && (
          <StyledAvatar>
            <img src={avatarUrl} alt={`${twitterName} avatar`} />
          </StyledAvatar>
        )}
      </StyledHeader>
      <StyledParagraph>{content}</StyledParagraph>

      <StyledButtonsWrapper>
        {pageType === 'articles' && (
          <Button as="a" href={articleUrl} target="_blank" rel="noopener noreferrer">
            Read more
          </Button>
        )}
        <Button $secondary onClick={() => navigate(routes[pageType])}>
          go back
        </Button>
      </StyledButtonsWrapper>
    </UserPageTemplate>
  );
};

export default DetailsTemplate;

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};
