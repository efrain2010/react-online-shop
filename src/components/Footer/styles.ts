import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#d25c37',
      marginTop: theme.spacing(4),
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      '& *': {
        color: '#fff',
      },
    },
  })
)

export default useStyles
