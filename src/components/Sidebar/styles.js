import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    sidebar: {
        width: '90px',
        left: '0',
        top: '100px',
        bottom: '0',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        paddingRight: '0 !important'
    },
    addButton: {
        borderRadius: '100rem',
        height: '45px',
        width: '45px',
        fontSize: '28px',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#1473E6',
        marginTop: '10px'
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: theme.spacing(1),
        width: '80%',
        marginTop: '10px',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '12px',
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#ccc'
        }
    },
    active: {
        backgroundColor: '#ccc',
        textDecoration: 'none',
    }
}))