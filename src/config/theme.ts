import { makeStyles } from '@material-ui/core/styles'

const textColor = '#1c1c1c'

const useStyles = makeStyles((theme) => ({
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
  },
}))

export default useStyles
