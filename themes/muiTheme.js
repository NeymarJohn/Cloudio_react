import { createTheme, Theme } from '@mui/material'

const muiTheme = createTheme({
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    primary: {
      main: 'rgba(43, 82, 221, 1)',
      '100': '#CEE7F6',
      '200': '#A0CDED',
      '300': '#689DC9',
      '400': '#3A6794',
      '500': '#0F2B4D',
      '600': '#0A2142',
      '700': '#071837',
      '800': '#04112C',
      '900': '#020C24',
    },
    secondary: {
      main: '#A5ADCF',
      '100': '#F2F5FC',
      '200': '#E5EAFA',
      '300': '#D3DAF0',
      '400': '#BFC7E2',
      '500': '#A5ADCF',
      '600': '#7882B2',
      '700': '#343D78',
      '800': '#343D78',
      '900': '#1F2763',
    },
    warning: {
      main: '#FF474A',
      '100': '#FFE6DA',
      '200': '#FFC7B5',
      '300': '#FFA290',
      '400': '#FF7E75',
      '500': '#FF474A',
      '600': '#DB3345',
      '700': '#B72340',
      '800': '#931639',
      '900': '#7A0D35',
    },
    success: {
      main: '#5FDCB3',
      '100': '#E0FDE8',
      '200': '#C2FBD7',
      '300': '#A1F4C8',
      '400': '#86EABF',
      '500': '#5FDCB3',
      '600': '#45BDA1',
      '700': '#2F9E8F',
      '800': '#1E7F7C',
      '900': '#126369',
    },
  },
  gradient: {
    gold: 'linear-gradient(90deg, #F9E4C9 20.2%, #BDA180 52.95%, #DEBB8E 100%)',
    bg: 'linear-gradient(170.93deg, #000000 0.39%, #001C34 40.23%)',
    button: 'linear-gradient(93.89deg, #B99E7D 0.8%, #876D4C 98.53%)',
    card: 'linear-gradient(146.4deg, #3C4988 4.74%, #002948 32.38%, #011935 69.24%)',
    table: 'linear-gradient(180deg, #3C4988 0%, #002948 100%)',
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#001C34',
          borderRadius: '14px',
          border: '1px solid #DAAE5C',
          position: 'relative',
          '&::after': {
            display: 'block',
            content: '""',
            position: 'absolute',
            height: '0px',
            width: '0px',
            border: '12px solid transparent',
          },
          '&::before': {
            display: 'block',
            content: '""',
            position: 'absolute',
            height: '0px',
            width: '0px',
            border: '12px solid transparent',
          },
        },
        tooltipPlacementLeft: {
          '&::after': {
            top: '50%',
            right: '-23px',
            borderLeftColor: '#001C34',
            transform: 'translateY(-50%)',
          },
          '&::before': {
            top: '50%',
            right: '-25px',
            borderLeftColor: '#DAAE5C',
            transform: 'translateY(-50%)',
          },
        },
        tooltipPlacementRight: {
          position: 'relative',
          '&::after': {
            top: '50%',
            left: '-23px',
            borderRightColor: '#001C34',
            transform: 'translateY(-50%)',
          },
          '&::before': {
            top: '50%',
            left: '-25px',
            borderRightColor: '#DAAE5C',
            transform: 'translateY(-50%)',
          },
        },
        tooltipPlacementBottom: {
          position: 'relative',
          '&::after': {
            top: '-22px',
            left: '50%',
            borderBottomColor: '#001C34',
            transform: 'translateX(-50%)',
          },
          '&::before': {
            top: '-24px',
            left: '50%',
            borderBottomColor: '#DAAE5C',
            transform: 'translateX(-50%)',
          },
        },
        tooltipPlacementTop: {
          position: 'relative',
          '&::after': {
            bottom: '-22px',
            left: '50%',
            borderTopColor: '#001C34',
            transform: 'translateX(-50%)',
          },
          '&::before': {
            bottom: '-24px',
            left: '50%',
            borderTopColor: '#DAAE5C',
            transform: 'translateX(-50%)',
          },
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: '100%',
          right: '0px',
          left: '0px',
          top: '90px',
          [theme.breakpoints.up('sm')]: {
            top: '90px',
          },
        }),
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        message: {
          textAlign: 'center',
          width: '100%',
        },
      },
    },
  },
})

const typoConfig = {
  ...muiTheme.typography,
  h1: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '50px',
    fontWeight: 600,
    lineHeight: '65px',
  },
  h2: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '58px',
  },
  h3: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '31px',
    fontWeight: 400,
    lineHeight: '38px',
    [muiTheme.breakpoints.up('md')]: {
      fontSize: '48px',
      lineHeight: '58px',
    },
  },
  caption: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px', 
    lineHeight: '29px',
    [muiTheme.breakpoints.up('md')]: {
      fontSize: '31px',
      lineHeight: '37px',
    },
  },
  caption2: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px', 
    lineHeight: '22px',
    [muiTheme.breakpoints.up('md')]: {
      fontSize: '25px',
      lineHeight: '30px',
    },
  },
  subheading1: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px', 
    lineHeight: '24px',
    [muiTheme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  body1: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px', 
    lineHeight: '24px',
  },
  body2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px', 
    lineHeight: '17px',
  },
  button: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '14px', 
    lineHeight: '17px',
    [muiTheme.breakpoints.up('md')]: {
      fontSize: '24px',
      lineHeight: '29px',
    },
  }
}

muiTheme.typography = typoConfig

export { muiTheme }
