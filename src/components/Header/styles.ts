import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
  search: {},
}))

export default useStyles
