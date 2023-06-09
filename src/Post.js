import Avatar from "@mui/material/Avatar";
import { forwardRef } from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import InputOption from "./InputOption";
import './Post.css'

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post_header">
            <Avatar src={photoURL}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <hr className="line"/>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
            <InputOption Icon={ChatIcon} title="Comment" color="gray" />
            <InputOption Icon={ShareIcon} title="Repost" color="gray" />
            <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>
    </div>
  )
})

export default Post