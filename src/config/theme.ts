import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'

import blueGrey from '@material-ui/core/colors/blueGrey'
import orange from '@material-ui/core/colors/orange'

const textColor = '#1c1c1c'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[50],
    },
    secondary: {
      main: orange[500],
    },
  },
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        margin: 0,
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                  sans-serif;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;`,
      },
      a: {
        color: `${textColor}`,
        textDecoration: 'none',
      },
      '.inline-list': {
        '& ul': {
          margin: 0,
          padding: 0,
          '& li': {
            listStyle: 'none',
            display: 'inline-block',
            marginRight: theme.spacing(),
            '&:last-of-type': {
              marginRight: 0,
            },
          },
        },
      },
      '.bg-img': {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
      '.text-center': {
        textAlign: 'center',
      },
    },
  })
)

export { theme, useStyles }
