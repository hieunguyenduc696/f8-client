import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
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
    text: {
        color: 'rgba(0,0,0,0.7)'
    },
    cate: {
        fontWeight: 'bold',
        fontSize: '22px',
        margin: '20px 0'
    },
    container: {
        padding: '2rem 4rem'
    },
    heading: {
        marginBottom: '16px'
    },
    headingtext: {
        marginBottom: '3rem',
        color: 'rgba(0,0,0,0.7)',
        fontSize: '16px'
    },
    courses: {
        margin: '2rem'
    }
}))