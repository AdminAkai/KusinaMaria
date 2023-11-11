interface IColors {
  blue: '#3E76AB'
  black: '#122333'
  gray: '#c5d5e5'
  white: '#FFFFF0'
}

interface IThemeColors {
  background: {
    primary: string
    secondary: string
  }
  nav: {
    primary: string
    secondary: string
  }
  logo: string
  text: {
    primary: string
    secondary: string
  }
}

interface ITheme {
  [key: string]: IThemeColors
}

const colors: IColors = {
  blue: '#3E76AB',
  black: '#122333',
  gray: '#c5d5e5',
  white: '#FFFFF0',
}

const lightTheme: IThemeColors = {
  background: {
    primary: colors.white,
    secondary: colors.gray,
  },
  nav: {
    primary: colors.black,
    secondary: colors.white,
  },
  logo: colors.blue,
  text: {
    primary: colors.black,
    secondary: colors.white,
  },
}

const darkTheme: IThemeColors = {
  background: {
    primary: colors.gray,
    secondary: colors.white,
  },
  nav: {
    primary: colors.white,
    secondary: colors.gray,
  },
  logo: colors.blue,
  text: {
    primary: colors.white,
    secondary: colors.white,
  },
}

const theme: ITheme = {
  lightTheme,
  darkTheme,
}

export default theme
