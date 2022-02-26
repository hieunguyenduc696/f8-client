import React from 'react'
import { Typography, Card, CardMedia, CardContent, Button, Grid, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

import ever from '../../images/ever.png'
import htmlcss from '../../images/htmlcss.png'
import jscoban from '../../images/jscoban.png'
import jsnangcao from '../../images/jsnangcao.png'
import node from '../../images/node.png'

import useStyles from './styles'

const Backend = () => {
  const classes = useStyles()  

  return (
      <>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} sm={9}>
                    <Typography variant="h4" className={classes.cate}>Front-end</Typography>
                    <Typography variant="subtitle2" className={classes.text} gutterBottom>
                        Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác. Back-end là nơi xử lý dữ liệu và lưu trữ. Vì vậy, nhiệm vụ của lập trình viên Back-end là phân tích thiết kế dữ liệu, xử lý logic nghiệp vụ của các chức năng trong ứng dụng.
                    </Typography>
                    <Typography variant="subtitle2" className={classes.text} gutterBottom>Tại Việt Nam, lương trung bình cho lập trình viên Back-end vào khoảng 19.000.000đ / tháng.</Typography>
                    <Typography variant="subtitle2" className={classes.text} gutterBottom>Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Back-end.</Typography>
                    <Typography variant="subtitle2" className={classes.note}>Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn thiện trong thời gian sớm nhất.</Typography>
                
                    <Typography variant="h5" className={classes.title} gutterBottom>1. Tìm hiểu về ngành IT</Typography>
                    <Typography variant="body2" className={classes.text}>Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.</Typography>

                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia image={ever} alt="Nhap mon" className={classes.media} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <CardContent>
                                    <Typography className={classes.name} variant="subtitle1">Kiến thức nhập môn IT</Typography>
                                    <Typography className={classes.content} variant="subtitle1" gutterBottom>Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.</Typography>
                                    <Button component={Link} to="/courses/2" size="small" variant="contained" className={classes.button}>Xem khóa học</Button>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                    <Typography variant="h5" className={classes.title} gutterBottom>2. HTML và CSS</Typography>
                    <Typography variant="body2" className={classes.text}>Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Dù bạn có theo Back-end thì công việc của bạn nhiều khi vẫn cần phải ghép dữ liệu với HTML, CSS.</Typography>

                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia image={htmlcss} alt="htmlcss" className={classes.media} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <CardContent>
                                    <Typography className={classes.name} variant="subtitle1">HTML, CSS từ Zero đến Hero</Typography>
                                    <Typography className={classes.content} variant="subtitle1" gutterBottom>Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.</Typography>
                                    <Button component={Link} to="/courses/1" size="small" variant="contained" className={classes.button}>Xem khóa học</Button>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                    <Typography variant="h5" className={classes.title} gutterBottom>3. Ngôn ngữ lập trình</Typography>
                    <Typography variant="body2" className={classes.text}>Có rất nhiều ngôn ngữ để bạn có thể làm việc với Back-end, tuy nhiên bạn không cần phải học tất cả. Bạn chỉ cần tập trung vào 1 ngôn ngữ là có thể làm việc tốt. Tại đây chúng ta sẽ bắt đầu với ngôn ngữ lập trình Javascript.</Typography>

                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia image={jscoban} alt="jscoban" className={classes.media} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <CardContent>
                                    <Typography className={classes.name} variant="subtitle1">JavaScript Cơ Bản</Typography>
                                    <Typography className={classes.content} variant="subtitle1" gutterBottom>Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.</Typography>
                                    <Button component={Link} to="/courses/5" size="small" variant="contained" className={classes.button}>Xem khóa học</Button>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia image={jsnangcao} alt="jsnangcao" className={classes.media} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <CardContent>
                                    <Typography className={classes.name} variant="subtitle1">JavaScript Nâng Cao</Typography>
                                    <Typography className={classes.content} variant="subtitle1" gutterBottom>Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...</Typography>
                                    <Button component={Link} to="/courses/7" size="small" variant="contained" className={classes.button}>Xem khóa học</Button>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                    <Typography variant="h5" className={classes.title} gutterBottom>4. Libraries and Frameworks</Typography>
                    <Typography variant="body2" className={classes.text}>Một ứng dụng Back-end hiện đại có thể rất phức tạp, việc sử dụng code thuần (tự tay code từ đầu) không phải là một lựa chọn tốt. Vì vậy các Libraries và Frameworks ra đời nhằm đơn giản hóa, tiết kiệm thời gian và tiền bạc để nhanh chóng tạo ra được sản phẩm cuối cùng.</Typography>

                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia image={node} alt="node" className={classes.media} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <CardContent>
                                    <Typography className={classes.name} variant="subtitle1">Node & ExpressJS</Typography>
                                    <Typography className={classes.content} variant="subtitle1" gutterBottom>Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.</Typography>
                                    <Button component={Link} to="/courses/8" size="small" variant="contained" className={classes.button}>Xem khóa học</Button>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}></Grid>
            </Grid>
        </Container>
      </>
  )
}

export default Backend