import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const Overview = () => {
  const classes = useStyles()  
  const redirect = () => {
    window.location.href = "https://www.youtube.com/c/F8VNOfficial?sub_confirmation=1";
  }  
  const Redirect = () => {
    window.location.href = "https://www.facebook.com/groups/f8official";
  }  
  return (
      <div className={classes.overview}>
          <Typography variant="subtitle1" gutterBottom>
            Tham gia nhóm&nbsp;
            <Link to="/" onClick={Redirect} style={{ color: '#f05123' }}>
                Học lập trình tại F8 
            </Link>
            &nbsp; trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️
          </Typography>
          <Typography variant="subtitle1">
            Các bạn subscribe kênh Youtube&nbsp;
            <Link to="/" onClick={redirect} style={{ color: '#f05123' }}>
                F8 Official
            </Link>
            &nbsp;để nhận thông báo khi có các bài học mới nhé ❤️
          </Typography>
          
      </div>
  )
}

export default Overview