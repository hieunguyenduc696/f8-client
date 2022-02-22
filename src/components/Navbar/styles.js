import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: theme.spacing(1.5, 4),
        boxShadow: 'none',
        borderBottom: '1px solid #ccc'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImage: {
        height: '40px'
    },
    logoText: {
        fontWeight: 'bold',
        marginLeft: '14px',
        fontSize: '16px'
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        minWidth: '420px',
        borderRadius: '40px',
        border: '1px solid #ccc',
        padding: theme.spacing(1)
    },
    searchBarIcon: {
        marginLeft: '10px'
    },
    searchText: {
        width: '100%',
        height: '100%',
        border: 'none',
        outline: 'none',
        marginLeft: '10px',
        fontSize: '14px',
        color: '#ccc',
        fontweight: 400
    }
}))