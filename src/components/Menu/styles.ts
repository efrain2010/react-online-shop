import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 6,
      '& a': {
        textTransform: 'capitalize',
        '& .active': {
          color: 'red',
        },
      },
    },
  })
)

export default useStyles
