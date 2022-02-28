import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        
    },
    cardAction: {
        display: "block",
        textAlign: "initial"
    },
    media: {
        height: 0,
        paddingTop: "56.25%",
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        animationDuration: '8s',
        '&:hover': {
            backgroundBlendMode: "darken"
        }
    },
    name: {
        fontWeight: 'bold',
    },
    numberOfUser: {
        display: 'flex',
        alignItems: 'center',
    },
    cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
      },
    overlay: {
        position: "absolute",
        backgroundColor: "white",
        color: 'black',
        borderRadius: '100rem',
        textTransform: 'unset',
        fontWeight: 'bold',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -0%)'
    }
}))