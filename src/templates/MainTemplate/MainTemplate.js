import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import PropTypes from 'prop-types';
import { theme } from 'theme/mainTheme';
import { usePageType } from 'hooks/usePageType';

const MainTemplate = ({ children }) => {
  const pageType = usePageType();

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, pageType }}>{children}</ThemeProvider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
