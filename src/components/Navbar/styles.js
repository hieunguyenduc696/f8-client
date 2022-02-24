import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '2px 32px',
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
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 !important'
      },
      profile: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      myCourse: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '40px',
        color: 'rgba(0,0,0,0.7)',
        fontWeight: 'bold',
        cursor: 'pointer'
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        cursor: 'pointer',
        position: 'relative',
      },
      box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: 'none',
        boxShadow: 24,
        outline: 'none',
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
      },
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      googleButton: {
        marginBottom: theme.spacing(2),
      },
      submenu: {
        position: 'absolute',
        top: '80%',
        minWidth: '250px',
        padding: theme.spacing(3),
        cursor: 'pointer',
        zIndex: 10
      },
      image: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        marginRight: '10px'
      },
      blog: {
        marginTop: '5px',
        borderBottom: '1px solid #ccc',
        padding: '15px 0',
        color: 'rgba(0,0,0,0.7)'
      },
      savedPost: {
        marginTop: '5px',
        borderBottom: '1px solid #ccc',
        padding: '15px 0',
        color: 'rgba(0,0,0,0.7)'
      },
      settings: {
        marginTop: '5px',
        padding: '15px 0 0',
        color: 'rgba(0,0,0,0.7)'
      }
}))