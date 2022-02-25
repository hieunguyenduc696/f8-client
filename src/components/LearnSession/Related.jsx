import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useStyles from './styles'
const Related = () => {
  const classes = useStyles()  
  return (
      <div className={classes.related}>
          <Typography variant="body1">
              <Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Fullstack.edu.vn</Link>
          </Typography>
          <Typography variant="body1">
            Made with ❤️ · Powered by F8
          </Typography>
      </div>
  )
}

export default Related