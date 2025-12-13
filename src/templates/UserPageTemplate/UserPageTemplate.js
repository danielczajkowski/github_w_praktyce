import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 4rem 16.1rem 4rem 8rem;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
`;

const StyledPageHeader = styled.div`
  margin-bottom: 4rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1.6rem;
  margin-top: 1.6rem;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const UserPageTemplate = ({ children, pageType = 'note' }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <StyledPageHeader>
        <Input $search placeholder={`Search in ${pageType}`} />
        <StyledHeading big>{pageType}</StyledHeading>
        <StyledParagraph>
          {children.length ? children.length : '1'} {pageType}
          {children.length ? 's' : ''}
        </StyledParagraph>
      </StyledPageHeader>
      <StyledGridWrapper>{children}</StyledGridWrapper>
    </StyledWrapper>
  </>
);

export default UserPageTemplate;

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.oneOf(['note', 'article', 'twitter']),
};
