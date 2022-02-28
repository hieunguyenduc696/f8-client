import React, { useState } from 'react'
import { Typography, Button, Box, Tabs, Tab } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useStyles from './styles'
const Itinerary = ({ setCate }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (value === 1) setCate('fe')
    else setCate('be')
  };
  return (
      <>
        <div className={classes.heading}>
            <Typography variant="h6" className={classes.headingTitle}>Lộ trình học</Typography>
            <Button to={"/itinerary"} component={Link} variant="contained" size="small" color='primary' className={classes.newBtn}>Mới</Button>
        </div>
        <div className={classes.category}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Front-end" style={{ fontWeight: 'bold' }} />
                        <Tab label="Back-end" style={{ fontWeight: 'bold' }} />
                    </Tabs>
                </Box>
            </Box>
        </div>
      </>
  )
}

export default Itinerary