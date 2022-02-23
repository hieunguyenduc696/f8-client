import React, { useState, useEffect } from 'react'
import { Typography, AppBar, Toolbar, Avatar, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import AuthModal from './AuthModal'

import useStyles from './styles'
import logo from '../../images/logo.png'


const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const dispatch = useDispatch()
    const location = useLocation()

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        setUser(null)
    }

    useEffect(() => {
        // const token = user?.token

        //JWT...

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
      <>
        <AppBar position="static" color="inherit" className={classes.appBar}>
            <div className={classes.logo}>
                <Link to="/">
                    <img src={logo} alt="logo" className={classes.logoImage} />
                </Link>
                <Typography variant="body1" className={classes.logoText}>Học Lập Trình Để Đi Làm</Typography>
            </div>
            <div className={classes.searchBar}>
                <SearchIcon className={classes.searchBarIcon} />
                <input
                    placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                    name='search'
                    className={classes.searchText}
                />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user.result.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="primary" onClick={logout}>Đăng xuất</Button>
                    </div>
                ): (
                    <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: '#f05123', color: 'white', fontWeight: 'bold', borderRadius: '100rem' }}>Đăng nhập</Button>
                )}
            </Toolbar>
            <AuthModal open={open} setOpen={setOpen} handleClose={handleClose} />
        </AppBar>
      </>
    )
}

export default Navbar