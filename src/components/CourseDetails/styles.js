import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    media: {
        height: '0',
        paddingTop: '56.25%'
    }
}))