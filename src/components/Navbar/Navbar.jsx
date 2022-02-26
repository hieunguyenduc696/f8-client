import React, { useState, useEffect, useRef } from 'react'
import { Typography, AppBar, Toolbar, Avatar, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import AuthModal from './AuthModal'
import Submenu from './Submenu'

import useStyles from './styles'
import logo from '../../images/logo.png'

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const wrapperRef = useRef(null);

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setMenuIsOpen(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(wrapperRef);

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
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
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
                    <div className={classes.profile} ref={wrapperRef}>
                        <Typography className={classes.myCourse} variant="subtitle1">
                            Khóa học của tôi
                        </Typography>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} onClick={() => menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        {menuIsOpen && <Submenu logout={logout} menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} avatar={user.result.imageUrl} name={user.result.name} />}
                    </div>
                ): (
                    <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: '#f05123', color: 'white', fontWeight: 'bold', borderRadius: '100rem' }}>Đăng nhập</Button>
                )}
            </Toolbar>
            <AuthModal setMenuIsOpen={setMenuIsOpen} open={open} setOpen={setOpen} handleClose={handleClose} />
        </AppBar>
      </>
    )
}

export default Navbar