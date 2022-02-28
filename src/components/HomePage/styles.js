import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    homepage: {
        [theme.breakpoints.down('sm')]: {
            padding: '2rem'
        }
    },
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
    heading: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '1rem'
        }
    },
    headingTitle: {
        fontWeight: 'bold',
        marginRight: '10px'
    },
    newBtn: {
        fontWeight: 'bold',
        alignItems: 'start'
    },
    category: {
        margin: '20px 0',
        fontWeight: 'bold',
    },
    carousel: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))