import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  padding: 4rem 16.1rem 4rem 23.5rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 2rem;
`;

const UserPageTemplate = ({ children, username }) => {
  return (
    <>
      <Sidebar />
      <StyledWrapper>
        <StyledHeading as="h2">Hi {username ? username.toUpperCase() : 'Guest'}!</StyledHeading>
        {children}
      </StyledWrapper>
    </>
  );
};

const mapStateToProps = ({ user = { username: null } }) => ({
  username: user.username,
});

export default connect(mapStateToProps, null)(UserPageTemplate);

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
