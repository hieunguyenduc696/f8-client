import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container: {
        padding: '2rem 0'
    },
    cate: {
        fontWeight: 'bold',
        fontSize: '30px',
        marginBottom: '30px'
    },
    text: {
        color: 'rgba(0,0,0,0.8)',
        fontSize: '17px',
        marginBottom: '10px'
    },
    note: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.6)',
        marginTop: '30px',
        borderLeft: '3px solid #F05123',
        paddingLeft: '20px',
        marginBottom: '50px'
    },
    title: {
        marginTop: '30px',
        fontWeight: 'bold',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',
        border: '2px solid #ccc',
        marginBottom: '20px',
    },
    media: {
        height: '120px',
        width: '100%',
        borderRadius: '20px',
        objectFit: 'cover',
        marginLeft: '20px'
    },
    content: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.7)',
        display:'-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordBreak: 'break-word',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
    },
    name: {
        fontWeight: 'bold',
        fontSize: '20px'
    },
    button: {
        backgroundColor: '#F05123',
        borderRadius: '100rem',
        padding: '5px 20px',
        color: 'white',
        textTransform: 'unset',
        fontWeight: 'bold',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: '#f85e31'
        }
    },
}))