import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#29303B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: theme.spacing(2, 4),
        maxHeight: '48px'
    },
    logoSection: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImage: {
        width: '120px'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    logoText: {
        marginLeft: '30px',
        borderLeft: '2px solid #ccc',
        paddingLeft: '20px'
    },
    progress: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progressText: {
        margin: '0 20px'
    },
    clue: {
        marginLeft: '10px'
    },
    container: {
        marginTop: '48px'
    },
    videoWrapper: {
        width: '100%',
        height: '540px',
        padding: '0 80px',
        backgroundColor: '#000'
    },
    video: {
        maxwidth: '1015px'
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 55px 10px 10px'
    },
    content: {

    },
    toolbar: theme.mixins.toolbar,
    summary: {
        display: 'flex',
        alignItems: 'center !important',
        justifyContent: 'space-between !important',
    },
    category: {
        padding: '0 80px '
    },
    overview: {
        marginTop: '20px'
    },
    related: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '50px'
    },
    commentSection: {
        marginTop: '40px'
    },
    form: {

    },
    yourComment: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        cursor: 'pointer',
        marginRight: '10px'
    },
    yourActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    cancel: {
        marginRight: '10px'
    },
    otherComment: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px'
    },
    purpleOther: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        marginRight: '30px'
    },
    commentName: {
        fontWeight: 'bold',
    },
    commentContent: {
        color: 'rgba(0,0,0,0.7)'
    }
}))