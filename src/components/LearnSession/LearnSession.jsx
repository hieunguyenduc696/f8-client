import React, { useEffect, useState } from 'react'
import { CircularProgress, AppBar, Typography, Grid, Paper  } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import HelpIcon from '@material-ui/icons/Help'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCourse } from '../../actions/courses'

import logoText from '../../images/f8_text_logo.png'
import CircularStatic from './Progress'
import CustomizedAccordions from './Accordian'

import useStyles from './styles'

const LearnSession = ({ setIsOpen }) => {
  const classes = useStyles()
  const { course } = useSelector(state => state.courses)
  console.log(course)
  const [videoId, setVideoId] = useState(course?.links[0][0])
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourse(id))
  }, [id, dispatch, videoId])

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]) 

  if (!course) return <CircularProgress />
  console.log(videoId)
  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <div className={classes.logoSection}>
          <div className={classes.logoImage}>
            <img src={logoText} alt="logo" className={classes.image} />
          </div>
          <Typography className={classes.logoText} variant="subtitle1">{course.name}</Typography>
        </div>
        <div className={classes.progress}>
          <CircularStatic />
          <Typography className={classes.progressText} variant="body1">Hoàn thành 4/114 bài học</Typography>
          <HelpIcon />
          <Typography className={classes.clue} variant="body1">Hướng dẫn</Typography>
        </div>
      </AppBar>

      <div className={classes.toolbar} />

      {course && <Grid container className={classes.container}>
        <Grid item xs={12} sm={8}>
          <div className={classes.videoWrapper}>
            {videoId !== undefined ? <iframe className={classes.video} width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              : <iframe className={classes.video} width="100%" height="100%" src={`https://www.youtube.com/embed/${course?.links[0][0]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.content}>Nội dung khóa học</Typography>
            <CloseIcon />
          </Paper>
          <CustomizedAccordions id={id} state={course.state} available={course.available} setVideoId={setVideoId} links={course.links} groupName={course.curriculumGroupName} time={course.curriculumTime} name={course.curriculumName} />
        </Grid>
      </Grid>}
    </>
  )
}

export default LearnSession