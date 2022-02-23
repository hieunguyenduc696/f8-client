import React, { useState } from "react";
import { Modal, Fade, Backdrop, Box, Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import Input from "./Input";
import Icon from './icon'

import useStyles from './styles'

const AuthModal = ({ open, setOpen, handleClose }) => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e) => {
      e.preventDefault()
  }

  const handleChange = (e) => {}
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword)
  const switchMode = () => {
      setIsSignup(prev => !prev)
      setShowPassword(false)    
  }
  const googleSuccess = async (res) => {
      const result = res?.profileObj
      const token = res?.tokenId
      
      try {
        dispatch({ type: 'AUTH', data: { result, token } })
        setOpen(false)
        history.push('/')
      } catch (error) {
        console.log(error)
      }
  }
  const googleFailure = () => {
      console.log("Google Sign In was unsuccessful. Please try again Later.")
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                    <>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} half autoFocus />
                                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                    </>
                                )
                            }
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                {isSignup ? 'Sign Up' : 'Sign In'}
                            </Button>
                            <GoogleLogin
                                clientId="360809020850-ajm3r49rjjtbamprc90ndvp4o94nhdtp.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button className={classes.googleButonButton} color="primary" fullWidth variant="contained" onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}>
                                        Google Sign In
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy='single_host_origin'
                            />
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up" }
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
      </Fade>
    </Modal>
  );
};

export default AuthModal;
