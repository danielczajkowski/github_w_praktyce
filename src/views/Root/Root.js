import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <>
      <GlobalStyle />
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </>
  );
}

export default Root;
