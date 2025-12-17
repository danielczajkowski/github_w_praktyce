import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { authenticateUser as authenticateUserAction } from 'actions';
import { Navigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import logo from 'assets/icons/logo.svg';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.notes};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLogo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40rem;
  max-width: calc(100% - 3rem);
  background-color: ${({ theme }) => theme.color.white};
  padding: 4rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: -0.5rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1rem;

  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}
`;

const StyledChangePageButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  background-color: transparent;
  padding: 0;
  text-decoration: underline;
  width: fit-content;
  height: auto;
  border-radius: 0;
`;

const Login = ({ authenticateUser, userID }) => {
  const [currentPage, setCurrentPage] = useState('login');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const passwordRef = useRef();
  const watchPassword = watch('password', '');
  passwordRef.current = watchPassword;

  const onSubmit = ({ username, password }) => {
    const endpoint = currentPage === 'login' ? 'login' : 'register';
    authenticateUser(username, password, endpoint);
  };

  return userID ? (
    <Navigate to="/" />
  ) : (
    <>
      <StyledWrapper>
        <StyledLogo src={logo} alt="logo" />
        <StyledHeading as="h1">Your new favorite online notes experience</StyledHeading>
        <StyledFormWrapper>
          <Heading as="h1">{userID}</Heading>
          <StyledHeading as="h2" $center>
            {currentPage === 'login' ? 'Sign in' : 'Register'}
          </StyledHeading>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('username', { required: 'Username is required' })}
              placeholder="Username"
            />
            {errors.username && <StyledErrorMessage>{errors.username.message}</StyledErrorMessage>}
            <Input
              {...register('password', {
                required: 'Password is required',
                ...(currentPage === 'register' && {
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      'Password must contain at least 8 characters, including at least one letter and one number',
                  },
                }),
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <StyledErrorMessage>{errors.password.message}</StyledErrorMessage>}

            {currentPage === 'register' && (
              <>
                <Input
                  {...register('repeatPassword', {
                    required: 'You must confirm your password',
                    validate: (value) => value === watchPassword || 'Passwords do not match',
                  })}
                  type="password"
                  placeholder="Repeat password"
                />
                {errors.repeatPassword && (
                  <StyledErrorMessage>{errors.repeatPassword.message}</StyledErrorMessage>
                )}
              </>
            )}

            <StyledButton type="submit">
              {currentPage === 'login' ? 'Login' : 'Register'}
            </StyledButton>
          </StyledForm>
          <StyledChangePageButton
            onClick={() => {
              setCurrentPage(currentPage === 'login' ? 'register' : 'login');
              reset();
            }}
          >
            {currentPage === 'login' ? "Don't have an account?" : 'Already have an account?'}
          </StyledChangePageButton>
        </StyledFormWrapper>
      </StyledWrapper>
    </>
  );
};

const mapStateToProps = ({ user = { id: null, username: null } }) => ({
  userID: user.id,
  username: user.username,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser: (username, password, endpoint) =>
    dispatch(authenticateUserAction(username, password, endpoint)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
