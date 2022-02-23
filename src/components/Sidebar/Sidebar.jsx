import React from 'react'
import { AppBar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import LocalMoviesOutlinedIcon from '@material-ui/icons/LocalMoviesOutlined'
import EmojiObjectsOutlined from '@material-ui/icons/EmojiObjectsOutlined'
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined'

import useStyles from './styles'
const Sidebar = () => {
  const classes = useStyles()
  return (
      <>
        <AppBar position="fixed" className={classes.sidebar} color="inherit">
            <button className={classes.addButton} > + </button>
            <NavLink to="/" className={classes.iconButton} activeClassName={classes.active}>
                <div style={{ padding: '5px 30px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '18px'}}>
                    <HomeOutlinedIcon style={{display: 'block'}} />
                    <div>Home</div>
                </div>
            </NavLink>
            <NavLink to="/shedule" className={classes.iconButton}>
                <div style={{ width: '100%', padding: '5px 30px 10px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '18px'}}>
                    <LocalMoviesOutlinedIcon style={{display: 'block'}} />
                    <div style={{ display: 'flex' }}>
                        <span>Lộ</span>
                        <span style={{ marginLeft: '2px'}}>trình</span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/courses" className={classes.iconButton}>
                <div style={{ padding: '5px 30px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '18px'}}>
                    <EmojiObjectsOutlined style={{display: 'block'}} />
                    <div>Học</div>
                </div>
            </NavLink>
            <NavLink to="/blog" className={classes.iconButton}>
                <div style={{ padding: '5px 30px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '18px'}}>
                    <ViewListOutlinedIcon style={{display: 'block'}} />
                    <div>Blog</div>
                </div>
            </NavLink>

        </AppBar>
      </>
  )
}

export default Sidebar