import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import { usePageType } from 'hooks/usePageType';
import { useState } from 'react';

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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  background-size: 35%;
  background-color: ${({ theme, $pageType }) => theme.color[$pageType]};
  z-index: 9;
`;

const GridTemplate = ({ children }) => {
  const [isVisibleNewItemBar, setIsVisibleNewItemBar] = useState(false);

  const toggleVisibilityNewItemBar = () => {
    setIsVisibleNewItemBar(!isVisibleNewItemBar);
  };

  const pageType = usePageType();

  return (
    <UserPageTemplate>
      <StyledPageHeader>
        <Input $search placeholder={`Search in ${pageType}`} />
        <StyledHeading $big>{pageType}</StyledHeading>
        <StyledParagraph>
          {children && children.length ? children.length : '1'}{' '}
          {children && children.length > 1 ? pageType : pageType.slice(0, -1)}
        </StyledParagraph>
      </StyledPageHeader>
      <StyledGridWrapper>{children}</StyledGridWrapper>
      <StyledButtonIcon
        $icon={plusIcon}
        $active
        $circle
        $pageType={pageType}
        onClick={toggleVisibilityNewItemBar}
      />
      <NewItemBar isVisible={isVisibleNewItemBar} handleClose={toggleVisibilityNewItemBar} />
    </UserPageTemplate>
  );
};

export default GridTemplate;

GridTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
