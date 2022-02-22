import React from 'react'
import { AppBar } from '@material-ui/core'
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
            <button className={classes.iconButton} size='small' >
                <div style={{ padding: '5px 30px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '18px'}}>
                    <HomeOutlinedIcon style={{display: 'block'}} />
                    <div>Home</div>
                </div>
            </button>
            <button className={classes.iconButton} size='small' >
                <div style={{ width: '100%', padding: '5px 30px 10px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '18px'}}>
                    <LocalMoviesOutlinedIcon style={{display: 'block'}} />
                    <div style={{ display: 'flex' }}>
                        <span>Lộ</span>
                        <span style={{ marginLeft: '2px'}}>trình</span>
                    </div>
                </div>
            </button>
            <button className={classes.iconButton} size='small' >
                <div style={{ padding: '5px 30px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '18px'}}>
                    <EmojiObjectsOutlined style={{display: 'block'}} />
                    <div>Học</div>
                </div>
            </button>
            <button className={classes.iconButton} size='small' >
                <div style={{ padding: '5px 30px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '18px'}}>
                    <ViewListOutlinedIcon style={{display: 'block'}} />
                    <div>Blog</div>
                </div>
            </button>

        </AppBar>
      </>
  )
}

export default Sidebar