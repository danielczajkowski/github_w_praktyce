import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import PropTypes from 'prop-types';
import { theme } from 'theme/mainTheme';

function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
