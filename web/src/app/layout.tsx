'use client'
import { Global, css } from "@emotion/react";
import { ThemeProvider } from '@emotion/react'
import { theme } from "@/styles/theme";
const globalStyles = css `
  @import url('https://static.toss.im/tps/main.css');
  @import url('https://static.toss.im/tps/others.css');
  @import url('https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css');

  * {
    font-family: 'Toss Product Sans', sans-serif;
    margin : 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.error};
    max-width: 480px;
    margin: 0 auto;

  }

  // Next.js의 Link 컴포넌트에 대한 스타일
  a[href]:not([class]) {
    color: inherit;
    text-decoration: none;
  }
`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
