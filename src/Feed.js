import { useState } from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import Avatar from "@mui/material/Avatar";
import InputOption from "./InputOption";
import PanoramaIcon from "@mui/icons-material/Panorama";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function Feed() {
    const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_box">
          <Avatar className="feed_avatar" />
          <div className="feed_input">
            <CreateIcon />
            <form>
              <input type="text" placeholder="Start a post" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={PanoramaIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SmartDisplayIcon} color="#50a63d" />
          <InputOption title="Event" Icon={CalendarMonthIcon} color="#E7A33E" />
          <InputOption
            title="Write article"
            Icon={NewspaperIcon}
            color="#b53b26"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(post => (
        <Post />
      ))}
      
      <Post
        name="Cameron Poole"
        description="Description"
        message="Message goes here"
        photoUrl=""
      />
    </div>
  );
}

export default Feed;
