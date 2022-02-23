import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

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
    },
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

export default function CustomizedAccordions({ groupName, time, name }) {
  const [expanded, setExpanded] = React.useState(0);
  const [isAdd, setIsAdd] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setIsAdd(newExpanded ? panel : false);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      {groupName.map((groupname, index) => (
        <Accordion square expanded={expanded === index} onChange={handleChange(index)} key={index} style={{ border: 'none' }}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ borderRadius: '16px', margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flex: '0.7' }}>
              {isAdd === index ? <RemoveIcon style={{ color: '#f05123', marginRight: '5px' }} /> : <AddIcon style={{ color: '#f05123', marginRight: '5px' }} />}
              <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '17px'}}>{groupname}</Typography>
            </div>
            <Typography variant="body1" style={{ flex: '0.3', justifyContent: 'flex-end', display: 'flex' }}>{name[index].length} bài học</Typography>          
          </AccordionSummary>
          {name[index].map((item,i) => (
            <AccordionDetails key={i}>
              <div style={{ display: 'flex', flex: '0.7' }}>
                <PlayCircleFilledIcon style={{ color: '#f05123', marginRight: '5px', cursor: 'pointer' }} />
                <Typography style={{ color: 'rgba(0,0,0,0.7)' }}>{item}</Typography>
              </div>
              <Typography style={{ color: 'rgba(0,0,0,0.7)', flex: '0.3', justifyContent: 'flex-end', display: 'flex' }}>{time[index][i]}</Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );
}