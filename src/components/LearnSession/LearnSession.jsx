import React, { useEffect, useState } from 'react'
import { CircularProgress, AppBar, Typography, Grid, Paper, Box, Tabs, Tab } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import HelpIcon from '@material-ui/icons/Help'

import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getCourse } from '../../actions/courses'
import { getComment } from '../../actions/comments'

import logoText from '../../images/f8_text_logo.png'
import CircularStatic from './Progress'
import CustomizedAccordions from './Accordian'
import Overview from './Overview'
import Related from './Related'
import Comment from './Comment'

import useStyles from './styles'

const LearnSession = ({ setIsOpen }) => {
  const classes = useStyles()
  const { course } = useSelector(state => state.courses)

  const [videoId, setVideoId] = useState(course?.links[0][0])
  const [value, setValue] = useState(0);
  const [pos, setPos] = useState([0, 0])

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourse(id))
  }, [id, dispatch, videoId])

  useEffect(() => {
    dispatch(getComment(id, pos[0], pos[1]))
  }, [id, pos, dispatch])

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]) 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  if (!course) return <CircularProgress />
  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <div className={classes.logoSection}>
          <Link className={classes.logoImage} to="/">
            <img src={logoText} alt="logo" className={classes.image} />
          </Link>
          <Typography className={classes.logoText} variant="subtitle1">{course.name}</Typography>
        </div>
        <div className={classes.progress}>
          <CircularStatic />
          <Typography className={classes.progressText} variant="body1">Hoàn thành 4/114 bài học</Typography>
          <HelpIcon />
          <Typography className={classes.clue} variant="body1">Hướng dẫn</Typography>
        </div>
      </AppBar>

      {course && <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={8}>
          <div className={classes.videoWrapper}>
            {videoId !== undefined ? <iframe className={classes.video} width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              : <iframe className={classes.video} width="100%" height="100%" src={`https://www.youtube.com/embed/${course?.links[0][0]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
          </div>
          <div className={classes.category}>
              <Box sx={{borderColor:'white'}}>
                  <Tabs value={value} onChange={handleChange} aria-label="tabs">
                      <Tab label="Tổng quan" sx={{ borderBottom: '1px solid #ccc' }} />
                      <Tab label="Liên quan" />
                  </Tabs>
              </Box>
              {value === 0 ? <Overview /> : <Related />}
              {value === 0 && <Comment pos={pos} />}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.content}>Nội dung khóa học</Typography>
            <CloseIcon />
          </Paper>
          <CustomizedAccordions setPos={setPos} id={id} state={course.state} available={course.available} setVideoId={setVideoId} links={course.links} groupName={course.curriculumGroupName} time={course.curriculumTime} name={course.curriculumName} />
        </Grid>
      </Grid>}
    </>
  )
}

export default LearnSession