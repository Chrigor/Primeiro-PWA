export const defaultTheme = {
  colors: {
    primary: {
      darker: '#006655',
      dark: '#007766',
      default: '#009988',
      light: '#22AA99',
      lighter: '#55CCBB',
    },
    secondary: {
      darker: '#330055',
      dark: '#440088',
      default: '#550099',
      light: '#7733AA',
      lighter: '#9966CC',
    },
    gray: {
      darker: '#484848',
      dark: '#767676',
      default: '#A5A5A5',
      light: '#E8E8E8',
      lighter: '#FAFAFA',
    },
    white: '#FFFFFF',
    black: '#333333',
    feedback: {
      positive: '#009988',
      negative: '#CE0000',
      warning: '#FF9911',
      report: '#3399DD',
      information: '#C6C6C6',
    },
    support: {
      1: '#55CCBB',
      2: '#009988',
      3: '#22CC77',
      4: '#22AA66',
      5: '#FFCC00',
      6: '#FF9911',
      7: '#DD5500',
      8: '#CE0000',
      9: '#EE66AA',
      10: '#CC4488',
      11: '#7733AA',
      12: '#550099',
      13: '#3399DD',
      14: '#0088CC',
      15: '#334455',
      16: '#223344',
      17: '#A5A5A5',
      18: '#767676',
    }
  },
  lineHeight: {
    xxlarge: "48px",
    xlarge: "32px",
    large: "24px",
    medium: "16px",
    small: "14px",
    xsmall: "10px",
  },
  font: {
    family: {
      primary: '"Open Sans", sans-serif',
      secondary: '"Pluto", sans-serif'
    },
    weight: {
      black: 900,
      bold: 700,
      semiBold: 500,
      regular: 400,
      light: 300,
    },
    size: {
      xsmall: '10px',
      small: '14px',
      medium: '16px',
      large: '24px',
      xlarge: '36px',
      xxlarge: '48px'
    },
    lineHeight: {
      xsmall: '12px',
      small: '16px',
      medium: '18px',
      large: '26px',
      xlarge: '38px',
      xxlarge: '50px'
    }
  },
  border: {
    radius:{
      large: '10px',
      medium: '8px',
      small: '6px',
      circle: '50%',
      pill: '200px',
    },
  },
  shadow: {
    level: {
      1: '0 0 6px',
      2: '0 0 10px',
      3: '0 0 16px',
    },
    color: 'rgba(0, 0, 0, 0.16)',
  },
  padding: {
    nano: '6px',
    xsmall: '8px',
    small: '16px',
    medium:'24px',
    large: '32px',
    xlarge:'55px',
  },
  spacing: {
    quark: '4px',
    nano: '8px',
    xxxsmall: '16px',
    xxsmall: '24px',
    xsmall: '32px',
    small: '40px',
    medium: '48px',
    large: '56px',
    xlarge: '64px',
    xxlarge: '80px',
    xxxlarge: '120px',
    huge: '160px',
    giant: '200px',
  },
  zIndex: {
    dropdown: "1000",
    sticky: "1020",
    fixed: "1030",
    drawerBackdrop: "1040",
    drawer: "1050",
    modalBackdrop: "1060",
    modal: "1070",
    pooper: "1080",
    tooltip: "1090",
  }
}

export type themesType = {
  colors: {
    primary: {
      darker: string,
      dark: string,
      default: string,
      light: string,
      lighter: string
    },
    secondary: {
      darker: string
      dark: string
      default: string
      light: string
      lighter: string
    },
    gray: {
      darker: string,
      dark: string,
      default: string,
      light: string,
      lighter: string
    },
    white: string,
    black: string,
    feedback: {
      positive: string,
      negative: string,
      warning: string,
      report: string,
      information: string,
    },
    support: {
      1: string,
      2: string,
      3: string,
      4: string,
      5: string,
      6: string,
      7: string,
      8: string,
      9: string,
      10: string,
      11: string,
      12: string,
      13: string,
      14: string,
      15: string,
      16: string,
      17: string,
      18: string,
    },
    customColors: Object | null,
  },
  lineHeight: {
    xxlarge:string,
    xlarge:string,
    large:string,
    medium:string,
    small:string,
    xsmall:string,
  },
  font: {
    family: {
      primary: string,
      secondary: string
    },
    weight: {
      black: number,
      bold: number,
      semiBold: number,
      regular: number,
      light: number
    },
    size: {
      xsmall:string,
      small:string,
      medium:string,
      large:string,
      xlarge:string,
      xxlarge:string,
    },
    lineHeight: {
      xsmall: string,
      small: string,
      medium: string,
      large: string,
      xlarge: string,
      xxlarge: string,
    }
  },
  border: {
    radius:{
      large: string,
      medium: string,
      small: string,
      circle: string,
      pill: string,
    },
  },
  shadow: {
    level: {
      1: string,
      2: string,
      3: string,
    },
    color: string,
  },
  padding: {
    nano: string,
    xsmall: string,
    small: string,
    medium: string,
    large: string,
    xlarge: string,
  },
  spacing: {
    quark: string,
    nano: string,
    xxxsmall: string,
    xxsmall: string,
    xsmall: string,
    small: string,
    medium: string,
    large: string,
    xlarge: string,
    xxlarge: string,
    xxxlarge: string,
    huge: string,
    giant: string,
  },
  zIndex: {
    dropdown: string,
    sticky: string,
    fixed: string,
    drawerBackdrop: string,
    drawer: string,
    modalBackdrop: string,
    modal: string,
    pooper: string,
    tooltip: string,
  }

}
