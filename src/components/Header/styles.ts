import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(1),
      borderBottom: '1px solid #ccc',
    },
    logo: {
      width: 250,
    },
    cartBtn: {
      '& button': {
        position: 'relative',
        '& .quantity': {
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '50%',
          color: '#fff',
          fontSize: 12,
          height: 15,
          padding: 1,
          position: 'absolute',
          right: 6,
          top: 5,
          width: 15,
        },
      },
    },
    drawer: {
      '& .MuiDrawer-paperAnchorRight': {
        padding: `${theme.spacing(2)}px ${theme.spacing(1)}pz`,
      },
      '& .title': {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 900,
      },
      '& .products-list': {
        borderTop: '1px solid #ddd',
        paddingTop: theme.spacing(2),
        width: 300,
        '& ul': {
          margin: 0,
          padding: 0,
          '& li': {
            listStyle: 'none',
            marginBottom: theme.spacing(1),
            '& figure': {
              height: 50,
              margin: 0,
              textAlign: 'center',
              '& img': {
                objectFit: 'contain',
                height: '100%',
              },
            },
          },
        },
      },
    },
  })
)

export default useStyles
