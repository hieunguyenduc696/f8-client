import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Typography } from '@material-ui/core'
import reactbanner from '../../images/reactbanner.png'
import achieve from '../../images/achieve.png'
import youtube from '../../images/youtube.png'
import facebook from '../../images/facebook.png'

import useStyles from './styles'

const HomeCarousel = (props) => {
    var items = [
        {
            title: 'Học ReactJS Miễn Phí',
            description: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
            buttonText: 'Đăng ký ngay',
            image: reactbanner,
            background: 'linear-gradient(90deg, rgba(46,110,245,1) 0%, rgba(73,70,227,1) 35%, rgba(100,28,207,1) 100%)'
        },
        {
            title: 'Thành Quả Của Học Viên',
            description: 'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
            buttonText: 'Xem thành quả',
            image: achieve,
            background: 'linear-gradient(90deg, rgba(115,21,255,1) 0%, rgba(63,96,255,1) 35%, rgba(6,177,255,1) 100%)'
        },
        {
            title: 'F8 trên Youtube',
            description: 'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
            buttonText: 'Truy cập kênh',
            image: youtube,
            background: 'linear-gradient(90deg, rgba(255,36,93,1) 0%, rgba(254,86,51,1) 35%, rgba(254,142,7,1) 100%)'
        },
        {
            title: 'F8 trên Facebook',
            description: 'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
            buttonText: 'Truy cập nhóm',
            image: facebook,
            background: 'linear-gradient(90deg, rgba(1,129,254,1) 0%, rgba(3,163,254,1) 35%, rgba(5,193,254,1) 100%)'
        },
    ]

    return (
        <Carousel style={{ borderRadius: '20px' }} navButtonsAlwaysVisible navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'white',
                color: '#999'
            }
        }}
        fullHeightHover={false}>
            {
                items.map((item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles()
    return (
        <Paper elevation={6} style={{ borderRadius: '20px', width: '100%', margin: '1rem auto', background: props.item.background }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className={classes.info}>
                    <Typography variant="h4" className={classes.title} gutterBottom>{props.item.title}</Typography>
                    <Typography variant="body1" className={classes.description} gutterBottom>{props.item.description}</Typography>
                    <Button variant="outlined" size="small" className={classes.button}>{props.item.buttonText}</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={props.item.image} alt={props.item.title} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default HomeCarousel