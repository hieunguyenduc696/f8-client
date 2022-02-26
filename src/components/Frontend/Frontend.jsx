import React from 'react'
import { Typography, Card, CardMedia, CardContent, Button, Grid, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

import ever from '../../images/ever.png'
import htmlcss from '../../images/htmlcss.png'
import responsive from '../../images/responsive.png'
import tiptrick from '../../images/tiptrick.png'
import jscoban from '../../images/jscoban.png'
import jsnangcao from '../../images/jsnangcao.png'
import react from '../../images/react.png'

import useStyles from './styles'

const FrontEnd = () => {
  const classes = useStyles()  

  return (
      <>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} sm={9}>
                    <Typography variant="h4" className={classes.cate}>Front-end</Typography>
                    <Typography variant="subtitle2" className={classes.text} gutterBottom>
                        Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng.
                    </Typography>
                    <Typography variant="subtitle2" className={classes.text} gutterBottom>Tại Việt Nam, lương trung bình cho lập trình viên front-end vào khoảng 16.000.000đ / tháng.</Typography>
                    <Typography variant="subtitle2" className={classes.text} gutterBottom>Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.</Typography>
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
                    <Typography variant="body2" className={classes.text}>Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Trong khóa học này F8 sẽ chia sẻ từ những kiến thức cơ bản nhất. Sau khóa học này bạn sẽ tự làm được 2 giao diện websites là The Band và Shopee.</Typography>

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
                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia image={responsive} alt="responsive" className={classes.media} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <CardContent>
                                    <Typography className={classes.name} variant="subtitle1">Responsive Với Grid System</Typography>
                                    <Typography className={classes.content} variant="subtitle1" gutterBottom>Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.</Typography>
                                    <Button component={Link} to="/courses/3" size="small" variant="contained" className={classes.button}>Xem khóa học</Button>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia image={tiptrick} alt="tiptrick" className={classes.media} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <CardContent>
                                    <Typography className={classes.name} variant="subtitle1">HTML, CSS Tips & Tricks</Typography>
                                    <Typography className={classes.content} variant="subtitle1" gutterBottom>Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế</Typography>
                                    <Button component={Link} to="/courses/4" size="small" variant="contained" className={classes.button}>Xem khóa học</Button>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                    <Typography variant="h5" className={classes.title} gutterBottom>3. JavaScript</Typography>
                    <Typography variant="body2" className={classes.text}>Với HTML, CSS bạn mới chỉ xây dựng được các websites tĩnh, chỉ bao gồm phần giao diện và gần như chưa có xử lý tương tác gì. Để thêm nhiều chức năng phong phú và tăng tính tương tác cho website bạn cần học Javascript.</Typography>

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
                    <Typography variant="body2" className={classes.text}>Một websites hay ứng dụng hiện đại rất phức tạp, chỉ sử dụng HTML, CSS, Javascript theo cách code thuần (tự code từ đầu tới cuối) sẽ rất khó khăn. Vì vậy các Libraries, Frameworks ra đời nhằm đơn giản hóa, tiết kiệm chi phí và thời gian để hoàn thành một sản phẩm website hoặc ứng dụng mobile.</Typography>

                    <Card className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia image={react} alt="react" className={classes.media} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <CardContent>
                                    <Typography className={classes.name} variant="subtitle1">Xây Dựng Website với ReactJS</Typography>
                                    <Typography className={classes.content} variant="subtitle1" gutterBottom>Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.</Typography>
                                    <Button component={Link} to="/courses/6" size="small" variant="contained" className={classes.button}>Xem khóa học</Button>
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

export default FrontEnd