import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    media: {
        height: '0',
        paddingTop: '56.25%',
        objectFit: 'cover'
    },
    container: {
        padding: '1rem 3rem'
    },
    name: {
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    content: {
        color: 'rgba(0,0,0,.6)',
        marginBottom: '2rem'
    },
    topicList: {
        marginBottom: '2rem',
    },
    curriculum: {
        marginBottom: '2rem'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    type: {
        color: '#f05123',
        fontSize: '2.2rem',
        opacity: 0.8,
        textAlign: 'center',
        marginTop: '1rem'
    },
    learnBtn: {
        backgroundColor: '#f05123',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        borderRadius: '100rem',
        fontSize: '16px',
        '&:hover': {
            backgroundColor: '#f5683e',
        }
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
    },
    level: {
        display: 'flex',
        alignItems: 'center',
    },
    totalLessions: {
        display: 'flex',
        alignItems: 'center',
    },
    totalTime: {
        display: 'flex',
        alignItems: 'center',
    },
    learn: {
        display: 'flex',
        alignItems: 'center',
    },
}))