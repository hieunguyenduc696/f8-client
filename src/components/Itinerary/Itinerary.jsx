import React from 'react'
import { Typography, Button, Card, CardMedia, CardContent, CardActions, Grid, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

import fe from '../../images/fe.png'
import be from '../../images/be.png'
import fbCard from '../../images/fb-group-card.png'

import useStyles from './styles'

const Itinerary = () => {
  const classes = useStyles()  
  const directToFB = () => {
    window.location.href = "https://www.facebook.com/groups/f8official"
  }
  return (
    <div className={classes.mainitinerary}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
            <Typography className={classes.itinerary} variant="h4">Lộ trình học</Typography>
            <Typography className={classes.text} variant="subtitle1" gutterBottom>Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.</Typography>
            <Typography className={classes.text} variant="subtitle1">Ví dụ: Để đi làm với vị trí “Lập trình viên Front-end” bạn nên tập trung vào lộ trình “Front-end”.</Typography>

            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={8}>
                                <CardContent className={classes.content}>
                                    <Typography className={classes.cate} variant="h6">Front-end</Typography>
                                    <Typography className={classes.cateText} variant="body1">
                                        Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.actions}>
                                    <Button component={Link} to="/itinerary/frontend" size="small" variant="contained" className={classes.button}>Xem chi tiết</Button>
                                </CardActions>
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.mediaW}>
                                <CardMedia image={fe} alt="fe" className={classes.media} />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={8}>
                                <CardContent className={classes.content}>
                                    <Typography className={classes.cate} variant="h6">Back-end</Typography>
                                    <Typography className={classes.cateText} variant="body1">
                                        Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.actions}>
                                    <Button component={Link} to="/itinerary/backend" size="small" variant="contained" className={classes.button}>Xem chi tiết</Button>
                                </CardActions>
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.mediaW}>
                                <CardMedia image={be} alt="be" className={classes.media} />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>

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
        </Container>
    </div>
  )
}

export default Itinerary