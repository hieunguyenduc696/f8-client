import React, { useState, useEffect, useRef } from 'react'
import { Typography, AppBar, Toolbar, Avatar, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import AuthModal from './AuthModal'
import Submenu from './Submenu'

import useStyles from './styles'
import logo from '../../images/logo.png'

const Navbar = ({ open, setOpen }) => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
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
        const token = user?.token

        if(token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
      <>
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <div className={classes.logo}>
                <Link to="/">
                    <img src={logo} alt="logo" className={classes.logoImage} />
                </Link>
                <Typography variant="body1" className={classes.logoText}>H???c L???p Tr??nh ????? ??i L??m</Typography>
            </div>
            <div className={classes.searchBar}>
                <SearchIcon className={classes.searchBarIcon} />
                <input
                    placeholder="T??m ki???m kh??a h???c, b??i vi???t, video, ..."
                    name='search'
                    className={classes.searchText}
                />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile} ref={wrapperRef}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} onClick={() => menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        {menuIsOpen && <Submenu logout={logout} menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} avatar={user.result.imageUrl} name={user.result.name} />}
                    </div>
                ): (
                    <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: '#f05123', color: 'white', fontWeight: 'bold', borderRadius: '100rem' }}>????ng nh???p</Button>
                )}
            </Toolbar>
            <AuthModal setMenuIsOpen={setMenuIsOpen} open={open} setOpen={setOpen} handleClose={handleClose} />
        </AppBar>
      </>
    )
}

export default Navbar