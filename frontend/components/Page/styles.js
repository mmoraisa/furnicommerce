import styled, { injectGlobal } from 'styled-components';

export const theme = {
  primaryColor: '#42239a',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

  #nprogress .bar {
    background: ${theme.primaryColor} !important;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px ${theme.primaryColor}, 0 0 5px ${theme.primaryColor} !important;
  }

  #nprogress .spinner-icon {
    border-top-color: ${theme.primaryColor} !important;
    border-left-color: ${theme.primaryColor} !important;
  }

`;

export const StyledPage = styled.div`
  background: #ffffff;
  color: ${({ theme }) => theme.black};
`;

export const InnerContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
