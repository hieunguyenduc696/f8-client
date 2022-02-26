import React from 'react'
import { AppBar, Typography, Grid, Container } from '@material-ui/core'
import useStyles from './styles'

import logo from '../../images/logo.png'
import dmca from '../../images/dmca.png'

const Footer = () => {
  const classes = useStyles()
  return (
      <AppBar position='static' className={classes.appBar} color='inherit'>
          <Container className={classes.container} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3} className={classes.item}>
                    <div className={classes.logo}>
                        <img src={logo} alt="logo" className={classes.logoImage} />
                        <Typography variant="subtitle2" className={classes.title}>Học lập trình để đi làm</Typography>
                    </div>
                    <div className={classes.content}>
                        <Typography variant="body1" gutterBottom>Email: contact@fullstack.edu.vn</Typography>
                        <Typography variant="body1" gutterBottom>Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy, Hà Nội</Typography>
                    </div>
                    <div className={classes.link}>
                        <img src={dmca} alt={logo} className={classes.linkImage} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.item}>
                    <div className={classes.titleWrapper}>
                        <Typography variant="subtitle2" className={classes.title}>Hỗ trợ</Typography>
                    </div>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Liên hệ</Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Bảo mật</Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Điều khoản</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.item}>
                    <div className={classes.titleWrapper}>
                        <Typography variant="subtitle2" className={classes.title}>Về F8</Typography>
                    </div>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Giới thiệu</Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Cơ hội việc làm</Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Đối tác</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.item}>
                    <div className={classes.titleWrapper}>
                        <Typography variant="subtitle2" className={classes.title}>Đơn vị chủ quản</Typography>
                    </div>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Người đại diện: Đặng Ngọc Sơn - Giám Đốc</Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Mã số doanh nghiệp: 0108721536</Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Ngày thành lập: 03/05/2019</Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body1" gutterBottom>Nơi cấp: Sở kế hoạch và đầu tư TP Hà Nội</Typography>
                        </li>
                    </ul>
                </Grid>
            </Grid>
            <Grid container className={classes.listContainer}>
                <Grid item xs={12} sm={10} className={classes.listContainerItem}>
                    <Typography className={classes.pr} variant="body1" gutterBottom>© 2022 F8 - Nền tảng học lập trình web đầu tiên tại Việt Nam</Typography>
                </Grid>
                <Grid item xs={12} sm={2} className={classes.listContainerItemm}>
                    fb
                </Grid>
            </Grid>
          </Container>
      </AppBar>
  )
}

export default Footer