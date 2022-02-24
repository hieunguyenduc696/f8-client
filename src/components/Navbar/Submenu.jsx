import React from "react";
import { Paper, Typography, Avatar } from "@material-ui/core";

import useStyle from "./styles";


const Submenu = ({ avatar, name, logout }) => {
  const classes = useStyle();

  return (
    <Paper elevation={8} className={classes.submenu}>
      <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '15px'}}>
        <Avatar className={classes.image} alt={name} src={avatar} >
          {name.charAt(0)}
        </Avatar>
        <Typography variant="body1">{name}</Typography>
      </div>
      <div className={classes.blog}>
        <Typography variant="subtitle1" gutterBottom>Viết blog</Typography>
        <Typography variant="subtitle1">Bài viết của tôi</Typography>
      </div>
      <div className={classes.savedPost}>
        <Typography variant="subtitle1">Bài viết đã lưu</Typography>
      </div>
      <div className={classes.settings}>
        <Typography variant="subtitle1" gutterBottom>Cài đặt</Typography>
        <Typography variant="subtitle1" onClick={logout}>Đăng xuất</Typography>
      </div>
    </Paper>
  );
};

export default Submenu;
