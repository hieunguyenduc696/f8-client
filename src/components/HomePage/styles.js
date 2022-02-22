import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
    },
    title: {
        paddingLeft: '3.5rem',
        fontWeight: 'bold',
    },
    description: {
        paddingLeft: '3.5rem',
        marginBottom: '20px'
    },
    button: {
        marginLeft: '3.5rem',
        overflow: 'hidden',
        color: 'white',
        borderRadius: '20px',
        width: '170px !important',
        fontWeight: 'bold',
        border: '3px solid white'
    },
}))