import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        paddingRight: '0 !important',
        backgroundColor: '#FAFAFA',
        minHeight: '260px',
        marginTop: '40px',
        zIndex: '100'
    },
    container: {
        padding: '1rem 2rem'
    },
    item: {
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column',
        textAlign: 'start'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    logoImage: {
        height: '40px',
        marginRight: '10px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
        marginBottom: '10px',
        color: 'rgba(0,0,0,0.8)'
    },
    titleWrapper: {
        height: '40px',
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '19px'
    },
    list: {
        listStyle: 'none',
        marginTop: '10px'
    }, 
    listItem: {
        color: 'rgba(0,0,0,0.8)'
    },
    listContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    listContainerItem: {
        textAlign: 'start'
    },
    listContainerItemm: {
        textAlign: 'end'
    }
}))