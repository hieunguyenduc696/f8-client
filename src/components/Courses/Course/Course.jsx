import React, { useState } from 'react'
import { Typography, Card, CardContent, CardActions, CardMedia, Button, ButtonBase } from '@material-ui/core'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutlined'
import { useHistory } from "react-router-dom"

import useStyles from './styles'
const Course = ({ course }) => {
  const classes = useStyles()
  const [style, setStyle] = useState({display: 'none'});
  const history = useHistory()

  const openPost = () => {
    history.push(`/courses/${course.id}`)
  }
  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
         component="span"
         name="test"
         className={classes.cardAction}
         onClick={openPost}
      >
        <CardMedia 
          className={classes.media} 
          image={course.url} 
          alt={course.name} 
          height={60} 
          onMouseEnter={e => setStyle({display: 'block'})}
          onMouseLeave={e => setStyle({display: 'none'})}  
        />
        <CardContent>
          <Typography className={classes.name} gutterBottom variant="subtitle1">{course.name}</Typography>
          <div className={classes.numberOfUser}>
            <PeopleOutlineIcon style={{ marginRight: '10px' }} />
            58.775
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button className={classes.overlay} style={style} size='small' color='primary' variant="outlined" onClick={openPost}>
            Xem khóa học
          </Button>
        </CardActions>
      </ButtonBase>
    </Card>
  )
}

export default Course