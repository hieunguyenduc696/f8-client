import React, { useState } from 'react'
import { Avatar, Typography, Button, TextField, CircularProgress } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { comment } from '../../actions/comments'

import useStyles from './styles'

const Comment = ({ pos }) => {
  const classes = useStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [wonder, setWonder] = useState('')
  const [style, setStyle] = useState({display: 'none'})
  const dispatch = useDispatch()
  const { id } = useParams()
  const Comment = useSelector(state => state.comment)

  const handleChange = (e) => {
    setWonder(e.target.value)
  }

  const handleSetStyle = () => setStyle({display: 'none'})
  const handleComment = () => setStyle({display: 'flex'})

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(comment(id, pos[0], pos[1], wonder, user?.result?.name, user.result.imageUrl || user?.result?.name?.charAt(0)))
    setWonder('')
  }
  if (!Comment) return <CircularProgress />
  
  return (
    <div className={classes.commentSection}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.yourComment}>
          {user && <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>}
          <TextField onClick={handleComment} value={wonder} label='Bạn có thắc mắc gì trong bài học này?' name="wonder" fullWidth required onChange={handleChange} />
        </div>
        <div className={classes.yourActions} style={style}>
          <Button className={classes.cancel} onClick={handleSetStyle} size='large' variant="contained" color='secondary'>Hủy</Button>
          <Button type="submit" disabled={wonder.length === 0} variant="contained" color='primary' size='large'>Bình luận</Button>
        </div>
      </form>
      <div>
        {Comment && Comment.map((c, i) => (
          <div className={classes.otherComment} key={i}>
            <Avatar className={classes.purpleOther} alt={c.userName} src={c.imageUrl}>{c.userName.charAt(0)}</Avatar>
            <div className={classes.commentInfo}>
              <Typography variant="subtitle1" className={classes.commentName}>{c.userName}</Typography>
              <Typography variant="body1" className={classes.commentContent}>{c.content}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comment