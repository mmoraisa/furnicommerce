import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import Meta from '../Meta';
import { theme, InnerContent, StyledPage } from './styles';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <InnerContent>
        {children}
      </InnerContent>
    </StyledPage>
  </ThemeProvider>
);

export default Page;
