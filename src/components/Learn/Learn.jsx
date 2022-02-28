import React, { useEffect } from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getCourses } from '../../actions/courses'
import Courses from '../Courses/Courses'

import fbCard from '../../images/fb-group-card.png'
import useStyles from './styles'
const Learn = ({ setIsOpen }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCourses())
  }, [dispatch])

  const directToFB = () => {
    window.location.href = "https://www.facebook.com/groups/f8official"
  }
  return (
    <div className={classes.container}>
      <div className={classes.toolbar} />
      <Typography variant="h4" className={classes.heading}>Khóa học</Typography>
      <Typography variant="subtitle2" className={classes.headingtext}>Các khóa học được thiết kế phù hợp cho cả người mới, miễn phí, nội dung dễ hiểu.</Typography>
      <Typography variant="h6" className={classes.cate}>Front-end</Typography>
      <Courses cate="fe" />
      <Typography variant="h6" className={classes.cate}>Back-end</Typography>
      <Courses cate="be" />

      <Grid container spacing={2} className={classes.containerBottom}>
        <Grid item xs={12} sm={6}>
            <Typography className={classes.join} variant="h4">Tham gia cộng đồng học viên F8 trên Facebook</Typography>
            <Typography className={classes.text} variant="subtitle1" gutterBottom>
              Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
            </Typography>
            <Button variant="outlined" className={classes.buttonJoin} onClick={directToFB}>Tham gia nhóm</Button>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'end' }}>
            <img src={fbCard} alt="card" className={classes.fbCard} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Learn