// styles/theme.ts

export const theme = {
    colors: {
      primary: '#0056b3',
      secondary: '#6c757d',
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40',
      white: '#ffffff',
      black: '#000000',
      gray: '#B8B8B8',
      background: '#F2F3F5',
      darkgray : '#595959',
      imagebackground: '#C4C4C4'
    },
    typography: {
      fontFamily: "'Toss Product Sans', sans-serif",
      fontSize: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem',
        xlarge: '1.5rem',
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
    spacing: {
      small: '0.5rem',
      medium: '1rem',
      large: '1.5rem',
      xlarge: '2rem',
    },
    borderRadius: {
      small: '0.25rem',
      medium: '0.5rem',
      large: '1rem',
    },
    shadows: {
      small: '0 2px 4px rgba(0, 0, 0, 0.1)',
      medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
      large: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
    breakpoints: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1024px',
    },
  }

  export type Theme = typeof theme;


