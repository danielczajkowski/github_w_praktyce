import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
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

const GridTemplate = ({ children, pageType = 'notes' }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledPageHeader>
      <Input $search placeholder={`Search in ${pageType}s`} />
      <StyledHeading $big>{pageType}</StyledHeading>
      <StyledParagraph>
        {children && children.length ? children.length : '1'} {pageType}
        {children && children.length ? 's' : ''}
      </StyledParagraph>
    </StyledPageHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </UserPageTemplate>
);

export default GridTemplate;

GridTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};
