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
        <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} sm={8} style={{ padding: '2rem 3rem'}}>
                <Typography variant="h2" gutterBottom className={classes.name}>{course.name}</Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.content}>{course.content}</Typography>

                <div className={classes.topicList}>
                  <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: '24px'}}>Bạn sẽ học được gì?</Typography>
                  <Grid container spacing={3} style={{ marginTop: '0px'}}>
                    {course.topicList.map(topic => (
                      <Grid item xs={12} sm={6} key={topic} style={{ display: 'flex', alignItems: 'center'}}>
                        <CheckIcon style={{ color: '#f05123' }} />
                        &nbsp;
                        <span style={{ fontSize: '17px', color: 'rgba(0,0,0,0.7)' }}>
                          {topic}
                        </span>
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <div className={classes.curriculum}>
                  <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Nội dung khóa học</Typography>
                  {course.totalSession} • {course.totalLessions} • {course.totalTime}
                  <CustomizedAccordions groupName={course.curriculumGroupName} time={course.curriculumTime} name={course.curriculumName} />
                </div>

                {course?.demand?.length !== 0 && <div className={classes.demand}>
                  <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Yêu cầu</Typography>                 
                  <Grid container spacing={3} style={{ marginTop: '0px'}}>
                    {course.demand.map(d => (
                      <Grid item xs={12} sm={12} key={d} style={{ display: 'flex', alignItems: 'center'}}>
                        <CheckIcon style={{ color: '#f05123' }} />
                        &nbsp;
                        <span style={{ fontSize: '17px', color: 'rgba(0,0,0,0.7)' }}>
                          {d}
                        </span>
                      </Grid>
                    ))}
                  </Grid>
                </div>}
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.media} image={course.url} alt={course.name} height={120} />
                  <Typography variant="h2" gutterBottom className={classes.type}>Đã đăng ký</Typography>
                  <CardActions>
                    <Button variant="contained" className={classes.learnBtn}>Tiếp tục học</Button>
                  </CardActions>
                  <CardContent className={classes.cardContent}>
                    <div className={classes.level}>
                      <PaletteIcon />
                      <Typography variant="body2" style={{ fontSize: '16px', marginLeft: '5px'}}>{course.level}</Typography>
                    </div>
                    <div className={classes.totalLessions}>
                      <LocalMoviesOutlinedIcon />
                      <Typography variant="body2" style={{ fontSize: '16px', marginLeft: '5px'}}>{course.totalLession}</Typography>
                    </div>
                    <div className={classes.totalTime}>
                      <WatchLaterOutlinedIcon />
                      <Typography variant="body2" style={{ fontSize: '16px', marginLeft: '5px'}}>{course.totalTime}</Typography>
                    </div>
                    <div className={classes.learn}>
                      <BathtubOutlinedIcon />
                      <Typography variant="body2" style={{ fontSize: '16px', marginLeft: '5px'}}>Học mọi lúc, mọi nơi</Typography>
                    </div>
                  </CardContent>
                </Card>
            </Grid>
        </Grid>
      </>
  )
}

export default CourseDetails