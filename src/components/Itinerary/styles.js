import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    itinerary: {
        fontWeight: 'bold',
        fontSize: '30px',
        margin: '30px 0'
    },
    text: {
        color: 'rgba(0,0,0,0.7)'
    },
    container: {
        marginTop: '40px'
    },
    card: {
        borderRadius: '20px',
        border: '2px solid #ccc',
        padding: '0 20px'
    },
    cate: {
        fontWeight: 'bold',
        fontSize: '22px'
    },
    cateText: {
        margin: '15px 0',
        color: 'rgba(0,0,0,0.8)'
    },
    button: {
        backgroundColor: '#F05123',
        color: 'white',
        borderRadius: '100rem',
        fontWeight: 'bold',
        fontSize: '14px',
        textTransform: 'unset',
        padding: '8px 25px',
        marginBottom: '20px',
        '&:hover': {
            backgroundColor: '#f85e31'
        }
    },
    media: {
        height: '122px',
        width: '122px',
        marginTop: '40px',
        border: '5px solid #F05123',
        borderRadius: '100rem',
    },
    containerBottom: {
        marginTop: '8rem'
    },
    join: {
        fontWeight: 'bold',
        fontSize: '30px',
        margin: '30px 0'
    },
    buttonJoin: {
        marginTop: '20px',
        padding: '8px 25px',
        borderRadius: '100rem',
        border: '2px solid #292929',
        color: '#292929',
        textTransform: 'unset',
        fontSize: '16px',
        fontWeight: '700'
    },
    fbCard: {
        width: '60%',
        maxHeight: '400px',
        objectFit: 'cover',
    },
}))