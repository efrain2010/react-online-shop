import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const imageSize = 300

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroSection: {
      color: '#fff',
      height: 350,
      textAlign: 'center',
    },
    productsSection: {
      marginTop: theme.spacing(4),
      '& figure': {
        height: imageSize,
        overflow: 'hidden',
        '& img': {
          height: imageSize,
          objectFit: 'contain',
        },
      },
    },
  })
)

export default useStyles
