import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroSection: {
      color: '#fff',
      height: 350,
      textAlign: 'center',
    },
  })
)

export default useStyles
