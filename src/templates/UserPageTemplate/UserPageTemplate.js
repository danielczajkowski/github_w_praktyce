import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 4rem 16.1rem 4rem 8rem;
`;

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default UserPageTemplate;

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
