import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello World</h1>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </>
  );
}

export default Root;
