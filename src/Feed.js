import { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import Avatar from "@mui/material/Avatar";
import InputOption from "./InputOption";
import PanoramaIcon from "@mui/icons-material/Panorama";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import { db } from "./firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore/lite";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function getPosts() {
      const postsCol = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCol);
      const postsList = postsSnapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setPosts(postsList);
      
    }
    getPosts();
  }, [posts]);

  const sendPost = (e) => {
    e.preventDefault();
    const addPost = async () => {
        await addDoc(collection(db, "posts"), {
      name: "Cameron Poole",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    })};
    addPost();
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_box">
          <Avatar className="feed_avatar" />
          <div className="feed_input">
            <CreateIcon />
            <form>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start a post"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
