import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import plusIcon from 'assets/icons/plus.svg';
import { usePageType } from 'hooks/usePageType';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { useForm } from 'react-hook-form';

const StyledWrapper = styled.div`
  width: 40rem;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-left: 5px solid ${({ theme, $pageType }) => theme.color[$pageType]};
  padding: 12rem 3rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform: translateX(100%);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  &.open {
    transform: translateX(0);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
`;

const StyledTextarea = styled(Input)`
  width: 100%;
  min-height: 10rem;
  border-radius: 1.2rem;
  resize: vertical;
`;

const StyledButton = styled(Button)`
  width: auto;
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme, $pageType }) => theme.color[$pageType]};
  border-color: ${({ theme, $pageType }) => theme.color[$pageType]};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: 1rem;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme, $pageType }) => theme.color[$pageType]};
  transform: rotate(45deg);
`;

const StyledClose = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1rem;
`;

const StyledCloseParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 0;
  }
`;

const NewItemBar = ({ isVisible = false, handleClose, addItem }) => {
  const pageType = usePageType();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addItem(pageType, data);
    handleClose();
    reset();
  };

  return (
    <StyledWrapper $pageType={pageType} className={isVisible ? 'open' : ''}>
      <Heading>Add new {pageType}</Heading>
      <StyledParagraph>Fill the form below to add a new {pageType}</StyledParagraph>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('title', {
            required: 'Title is required',
          })}
          placeholder="Title"
        />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

        {pageType === 'twitters' && (
          <>
            <Input
              {...register('twitterName', {
                required: 'Twitter name is required',
                minLength: {
                  value: 3,
                  message: (
                    <>
                      Twitter name must be <strong>at least 3 characters long</strong>
                    </>
                  ),
                },
                maxLength: {
                  value: 20,
                  message: (
                    <>
                      Twitter name must be <strong>at most 20 characters long</strong>
                    </>
                  ),
                },
              })}
              placeholder="Twitter name"
            />
            {errors.twitterName && <ErrorMessage>{errors.twitterName.message}</ErrorMessage>}
            <Input
              {...register('avatarUrl', {
                required: 'Avatar is required',
                pattern: {
                  value: /(^https?:\/\/)|(^www\.)/,
                  message: 'Invalid avatar url',
                },
              })}
              placeholder="Avatar url"
            />
            {errors.avatarUrl && <ErrorMessage>{errors.avatarUrl.message}</ErrorMessage>}
          </>
        )}
        {pageType === 'articles' && (
          <>
            <Input
              {...register('articleUrl', {
                required: 'Link is required',
                pattern: {
                  value: /(^https?:\/\/)|(^www\.)/,
                  message: 'Invalid link',
                },
              })}
              placeholder="Link"
            />
            {errors.articleUrl && <ErrorMessage>{errors.articleUrl.message}</ErrorMessage>}
          </>
        )}
        <StyledTextarea
          {...register('content', {
            required: 'Content is required',
          })}
          as="textarea"
          placeholder="Content"
        />
        {errors.content && <ErrorMessage>{errors.content.message}</ErrorMessage>}
        <StyledButton $pageType={pageType} type="submit">
          Add new {pageType.slice(0, -1)}
        </StyledButton>
      </StyledForm>

      <StyledClose onClick={handleClose}>
        <StyledCloseParagraph>Close</StyledCloseParagraph>
        <StyledButtonIcon $icon={plusIcon} $pageType={pageType} $circle />
      </StyledClose>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, item) => dispatch(addItemAction(itemType, item)),
});

export default connect(null, mapDispatchToProps)(NewItemBar);
