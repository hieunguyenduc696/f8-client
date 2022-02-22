import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, Button, CircularProgress, Card, CardContent, CardMedia, CardActions } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import PaletteIcon from '@material-ui/icons/Palette'
import LocalMoviesOutlinedIcon from '@material-ui/icons/LocalMoviesOutlined'
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined'
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined'

import CustomizedAccordions from './Accordian'
import { getCourse} from '../../actions/courses'

import useStyles from './styles'

const CourseDetails = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { course } = useSelector(state => state.courses)
  
  useEffect(() => {
    dispatch(getCourse(id))
    console.log(id)
  }, [id, dispatch])

  if (!course) return <CircularProgress />
  
  return (
      <>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={9}>
                <Typography variant="h2" gutterBottom>{course.name}</Typography>
                <Typography variant="subtitle1" gutterBottom>{course.content}</Typography>

                <div className={classes.topicList}>
                  <Typography variant="h5">Bạn sẽ học được gì</Typography>
                  <Grid container spacing={3}>
                    {course.topicList.map(topic => (
                      <Grid item xs={12} sm={6} key={topic}>
                        <CheckIcon />
                        {topic}
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <div className={classes.curriculum}>
                  <Typography variant="h5">Nội dung khóa học</Typography>
                  {course.totalSession} • {course.totalLessions} • {course.totalTime}
                  <CustomizedAccordions groupName={course.curriculumGroupName} time={course.curriculumTime} name={course.curriculumName} />
                </div>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card>
                  <CardMedia className={classes.media} image={course.url} alt={course.name} height={120} />
                  <Typography variant="h2" gutterBottom>Đã đăng ký</Typography>
                  <CardActions>
                    <Button variant="contained" className={classes.learnBtn}>Tiếp tục học</Button>
                  </CardActions>
                  <CardContent>
                    <div className={classes.level}>
                      <PaletteIcon />
                      <Typography variant="body2">{course.level}</Typography>
                    </div>
                    <div className={classes.totalLessions}>
                      <LocalMoviesOutlinedIcon />
                      <Typography variant="body2">{course.totalSession}</Typography>
                    </div>
                    <div className={classes.totalTime}>
                      <WatchLaterOutlinedIcon />
                      <Typography variant="body2">{course.totalTime}</Typography>
                    </div>
                    <div className={classes.learn}>
                      <BathtubOutlinedIcon />
                      <Typography variant="body2">Học mọi lúc, mọi nơi</Typography>
                    </div>
                  </CardContent>
                </Card>
            </Grid>
        </Grid>
      </>
  )
}

export default CourseDetails