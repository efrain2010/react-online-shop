import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    paddingTop: 6,
    '& .active': {
      color: 'red',
    },
  },
})

export default useStyles
