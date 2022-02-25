import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import CheckCircle from '@material-ui/icons/CheckCircle'

import { useDispatch } from 'react-redux'
import { seenCourse } from '../../actions/courses'

import useStyles from './styles'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions({ id, groupName, time, name, setVideoId, links, available, state, setPos }) {
  const [expanded, setExpanded] = useState(0);
  const [isAdd, setIsAdd] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setIsAdd(newExpanded ? panel : false);
  };

  const handleClick = (i, j) => {
    dispatch(seenCourse(id, i, j))
    setPos([i, j])
    setVideoId(links[i][j])
  }
  const userId = (user?.result?.googleId || user?.result?._id)

  return (
    <div style={{ overflowY: 'scroll', position: 'relative', height: '100vh'}}>
      {groupName.map((groupname, index) => (
        <Accordion square expanded={expanded === index} onChange={handleChange(index)} key={index} style={{ border: 'none' }}>
          <AccordionSummary className={classes.summary} aria-controls="panel1d-content" id="panel1d-header">
            <div style={{ flex: '0.9' }}>
              <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '17px'}}>Phần {groupname}</Typography>
              <Typography variant="body1" >{name[index].length} bài học</Typography>
            </div>
            <div style={{ flex: '0.1' }}>
              {isAdd === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
          </AccordionSummary>
          {name[index].map((item,id) => ( 
            available[index][id].find(g => g === userId) ? (
            <AccordionDetails key={id} style={{ cursor: 'pointer' }} onClick={() => handleClick(index, id)}>
              <div style={{ display: 'flex', flex: '0.7' }}>
                {state[index][id].find(t => t === userId) ? <CheckCircle style={{ color: '#f05123', marginRight: '5px', cursor: 'pointer' }} /> :
                  <PlayCircleFilledIcon style={{ color: '#f05123', marginRight: '5px', cursor: 'pointer' }} />}
                <Typography style={{ color: 'rgba(0,0,0,0.7)' }}>{item}</Typography>
              </div>
              <Typography style={{ color: 'rgba(0,0,0,0.7)', flex: '0.3', justifyContent: 'flex-end', display: 'flex' }}>{time[index][id]}</Typography>
            </AccordionDetails>) : (
              <AccordionDetails key={id} style={{ cursor: 'not-allowed', backgroundColor: '#F2F2F2' }}>
              <div style={{ display: 'flex', flex: '0.7' }}>
                <PlayCircleFilledIcon style={{ color: '#f05123', marginRight: '5px', cursor: 'pointer' }} />
                <Typography style={{ color: 'rgba(0,0,0,0.7)' }}>{item}</Typography>
              </div>
              <Typography style={{ color: 'rgba(0,0,0,0.7)', flex: '0.3', justifyContent: 'flex-end', display: 'flex' }}>{time[index][id]}</Typography>
            </AccordionDetails>
            )
          ))}
        </Accordion>
      ))}
    </div>
  );
}