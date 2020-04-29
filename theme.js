// example base theme from @theme-ui/presets
export default {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ['40em', '52em', '64em'],

  space: [0, 4, 8, 12, 14, 16, 24, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 12, 14, 16, 24, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    heading:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    monospace: 'monospace'
  },

  fontSizes: [11, 13, 14, 15, 16, 18, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    semiBold: 500
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 1.05,
    loose: 1.2
  },

  colors: {
    // textMuted: '#6F8390', //used in card title/headers
    text: '#231536', //some text like headers are black
    // textMuted: '#6F8390', //used in card title/headers (not sure whats for??)
    // changing textMuted from ... to #7E7E88
    textMuted: '#7E7E88',
    //changing textAlt fro #7E7E88 to #48495F (formerly graphite)

    textAlt: '#48495F', // was graphite, lightest shade of grey
    background: '#F6F8F9',
    foreground: '#fff',
    primary: '#1AAB9B',
    primaryEmphasis: '#139D8D', // same as primaryHover & green1
    // primaryEmphasis: '#2DC1B1', //from figma-- should be Emph
    primaryAlt: '#098C7D', //from figma, should be Alt ?
    primaryMuted: '#B6EDE7', // used in disabled...
    primaryContrast: '#FFF', //
    secondary: '#FFF', //maybe not needed bc of transparent
    accentBlue: '#447AFB', // blue link text
    accentPurple: '#9055AF', //used for Kovan indicator
    // orangeText: '#E67003', //used in error/warning text --use same from warning
    muted: '#D4D9E1', // border color for cards/buttons, called muted
    // grey2: "#E2E9EC",
    // white: "#fff",
    // sidebar: "#1E2C37",
    // subText: "#48495F",
    lightText: '#708390',
    // accent: "#447AFB",
    // green1: "#098C7D",
    // green2: "#139D8D",
    // green3: "#B6EDE7",
    // highlight: "#E7FCFA",
    warningMuted: '#FFF9ED', // background color for status
    warning: '#FCDC93', // border color
    warningEmphasis: '#E67003', // text color
    successMuted: '#E7FCFA', // bg, from figma
    success: '#2DC1B1', //from figma, border color
    successEmphasis: '#098C7D', // bg, from figma
    dangerMuted: '#FDEDE8', // bg, from figma
    danger: '#F77249', //from figma, border color
    dangerEmphasis: '#7E2205'
    // yellow1: "#E47F09",
    // yellow2: "#FBCC5F",
    // yellow3: "#FFF9ED",
    // red1: "#CB532D",
    // red2: "#FA7249",
    // red3: "#FA7249",
  },

  xcolorsx: {
    text: '#231536',
    background: '#F6F8F9',
    primary: '#1AAB9B',
    primaryHover: '#139D8D',
    primaryActive: '#098C7D',
    lightGreen: '#B6EDE7',
    lightCyan: '#E7FCFA',
    darkCyan: '#2DC1B1',
    graphite: '#48495F',
    lightGraphite: '#7E7E88',
    purple: '#447AFB',
    blackThree: '#333',
    border: '#D4D9E1',
    white: '#fff',
    grayishBlue: '#9FAFB9',
    darkGrayishBlue: '#708390',
    yellow: '#FFF1CF',
    orange: '#E67002',
    lightOrange: '#FFF9ED',
    borderOrange: '#FBCC5F'

    // text: '#000',
    // background: '#fff',
    // primary: '#07c',
    // secondary: '#30c',
    // muted: '#f6f6f6',
  },

  borders: {
    light: '1px solid'
  },

  buttons: {
    //todo text is no longer caps, & p is off (but that's ok bc its from new figma spec)
    primary: {
      // maxWidth: ['100%', '224px'], //need this?
      cursor: 'pointer',
      outline: 'none',
      fontFamily: 'body',
      fontSize: 4,
      p: 3,
      color: 'primaryContrast',
      fontWeight: 'semiBold',
      borderRadius: 'xs',
      letterSpacing: '0.03em',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryEmphasis'
      },
      '&:active': {
        bg: 'primaryAlt'
      },
      '&:disabled': {
        bg: 'primaryMuted',
        pointerEvents: 'none',
        cursor: 'not-allowed'
      }
    },
    // xprimary: {
    //   outline: 'none',
    //   fontFamily: 'body',
    //   fontSize: 4,
    //   px: 6,
    //   py: 3,
    //   color: 'primaryContrast',
    //   fontWeight: 'semiBold',
    //   letterSpacing: '0.03em',
    //   bg: 'primary',
    //   '&:hover': {
    //     bg: 'primaryEmphasis'
    //   },
    //   '&:active': {
    //     bg: 'primaryAlt'
    //   },
    //   '&:disabled': {
    //     bg: 'primaryMuted',
    //     pointerEvents: 'none',
    //     cursor: 'not-allowed'
    //   }
    // },
    outline: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'textMuted',
      border: '1px solid',
      borderColor: 'muted',
      '&:hover': {
        bg: 'transparent',
        color: 'textAlt',
        borderColor: 'textMuted'
      },
      '&:active': {
        borderColor: 'text',
        color: 'text'
      },
      '&:disabled': {
        bg: 'background',
        pointerEvents: 'none',
        cursor: 'not-allowed',
        borderColor: 'muted',
        opacity: 0.5
      }
    },
    // todo come back to this...? not used??
    // xoutline: {
    //   variant: 'buttons.primary',
    //   bg: 'transparent',
    //   color: 'text', // text Muted
    //   border: '1px solid',
    //   cursor: 'pointer',
    //   borderColor: 'text', //border color change to textContrast
    //   '&:hover': {
    //     bg: 'transparent',
    //     color: 'text', //should be a darker gray (mutedAlt?)
    //     borderColor: 'text' //should be a darker gray (mutedAlt?)
    //   },
    //   '&:active': {
    //     borderColor: 'text',
    //     color: 'text'
    //   }
    // },

    small: {
      variant: 'buttons.primary',
      textTransform: 'uppercase',
      outline: 'none',
      letterSpacing: '0.05em',
      fontSize: 0,
      fontWeight: 'bold',
      cursor: 'pointer',
      p: 2,
      color: 'primaryContrast',
      bg: 'primary',
      border: '1px solid',
      borderColor: 'primary',
      '&:hover': {
        bg: 'primaryEmphasis'
      },
      '&:active': {
        bg: 'primaryAlt'
      },
      '&:disabled': {
        // opacity: 0.5,
        bg: 'primaryMuted',
        // bg: 'lightGreen',
        pointerEvents: 'none',
        cursor: 'not-allowed'
      }
    },

    // small: {
    //   outline: 'none',
    //   variant: 'text.caps',
    //   letterSpacing: '0.05em',
    //   cursor: 'pointer',
    //   py: 2,
    //   px: 4,
    //   color: 'white',
    //   bg: 'primary',
    //   border: '1px solid',
    //   borderColor: 'primary',
    //   '&:hover': {
    //     bg: 'primaryHover'
    //   },
    //   '&:active': {
    //     bg: 'primaryActive'
    //   },
    //   '&:disabled': {
    //     opacity: 0.5,
    //     // bg: 'lightGreen',
    //     pointerEvents: 'none',
    //     cursor: 'not-allowed'
    //   }
    // },
    smallOutline: {
      variant: 'buttons.small',
      bg: 'transparent',
      color: 'textMuted',
      border: '1px solid',
      borderColor: 'muted',
      '&:hover': {
        bg: 'transparent',
        color: 'textAlt',
        borderColor: 'textMuted'
      },
      '&:active': {
        bg: 'transparent',
        borderColor: 'text',
        color: 'text'
      },
      '&:disabled': {
        bg: 'background',
        pointerEvents: 'none',
        cursor: 'not-allowed',
        borderColor: 'muted',
        opacity: 0.5
      }
    },
    // xsmallOutline: {
    //   variant: 'buttons.small',
    //   bg: 'transparent',
    //   color: 'textAlt', //was lightGraphite
    //   border: '1px solid',
    //   borderColor: 'muted', // was border
    //   '&:hover': {
    //     bg: 'transparent',
    //     color: 'textAlt', //was graphite
    //     borderColor: 'textMuted' //was lightGraphite
    //   },
    //   '&:active': {
    //     bg: 'transparent',
    //     borderColor: 'text',
    //     color: 'text'
    //   }
    // },
    clear: {
      bg: 'transparent',
      p: 1
      // p: 0
    },

    textual: {
      background: 'transparent',
      color: 'accentBlue',
      outline: 'none',
      cursor: 'pointer',
      fontSize: 1
    }
  },

  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },

    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'textAlt',
      fontSize: 0,
      fontWeight: 'bold'
    },

    h1: {
      fontSize: 8,
      letterSpacing: '0.3px',
      fontWeight: 'semiBold'
    },

    h2: {
      fontSize: 6,
      lineHeight: 'loose',
      fontWeight: 'semiBold',
      letterSpacing: '0.4px'
    },

    bigText: {
      fontSize: 8
    },
    boldBody: {
      fontSize: 4,
      fontWeight: 'semiBold',
      letterSpacing: '0.3px'
    },
    small: {
      fontSize: 1
    },
    inputText: {
      fontSize: 3,
      fontWeight: 'normal'
    },
    smallDanger: {
      fontSize: 1,
      color: 'danger'
    },
    muted: {
      color: 'textMuted',
      fontSize: 4,
      lineHeight: 'body'
    }
  },
  links: {
    nav: {
      fontSize: 5,
      fontWeight: 'body',
      letterSpacing: '0.4px',
      color: 'text',
      cursor: 'pointer',
      '&:hover': {
        color: 'primary',
        cursor: 'pointer'
      }
    },

    footer: {
      fontSize: 4,
      fontWeight: 'semiBold',
      letterSpacing: '0.4px',
      color: 'text',
      cursor: 'pointer'
    }
  },
  styles: {
    time: {
      display: 'inline',
      major: {
        fontSize: 4,
        fontWeight: 'semiBold'
      },
      minor: {
        fontSize: 1,
        fontWeight: 'body',
        color: 'textMuted' //todo check if it looks ok
      }
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    roundedCard: {
      border: '1px solid',
      borderColor: 'muted',
      p: 6,
      borderRadius: 6,
      bg: 'foreground'
    },
    statusBox: {
      layout: {
        border: '1px solid',
        borderRadius: 6,
        fontSize: 2,
        fontWeight: 'bold',
        py: 3,
        px: 4,
        mt: 7,
        lineHeight: 'body',
        width: '100%'
      },
      warning: {
        //todo match these with alert
        variant: 'styles.statusBox.layout',
        bg: 'lightOrange',
        borderColor: 'orangeBorder',
        color: 'orange'
      },
      success: {
        variant: 'styles.statusBox.layout',
        bg: 'lightCyan',
        borderColor: 'darkCyan',
        color: 'primaryActive'
      }
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7
    },
    h2: {
      variant: 'text.heading',
      fontSize: 6,
      fontWeight: 'body'
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
      py: 4,
      pb: 3,
      fontWeight: 500
    },
    h4: {
      variant: 'text.heading',
      fontSize: 4
    },
    h5: {
      variant: 'text.heading',
      fontSize: 3
    },
    a: {
      color: 'accentBlue',
      textDecoration: 'none'
    }
    // h6: {
    //   variant: 'text.heading',
    //   fontSize: 2,
    // },
    // pre: {
    //   fontFamily: 'monospace',
    //   overflowX: 'auto',
    //   code: {
    //     color: 'inherit',
    //   },
    // },
    // code: {
    //   fontFamily: 'monospace',
    //   fontSize: 'inherit',
    // },
    // table: {
    //   width: '100%',
    //   borderCollapse: 'separate',
    //   borderSpacing: 0,
    // },
    // th: {
    //   textAlign: 'left',
    //   borderBottomStyle: 'solid',
    // },
    // td: {
    //   textAlign: 'left',
    //   borderBottomStyle: 'solid',
    // },
  }
};
