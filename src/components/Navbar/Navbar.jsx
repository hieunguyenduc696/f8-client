import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'

import useStyles from './styles'
import logo from '../../images/logo.png'
const Navbar = () => {
    const classes = useStyles()
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
            <div className={classes.grow} />
        </AppBar>
      </>
    )
}

export default Navbar