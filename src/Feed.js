import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import Avatar from '@mui/material/Avatar';
import InputOption from './InputOption';
import PanoramaIcon from '@mui/icons-material/Panorama';

function Feed() {
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_box">
            <Avatar className="feed_avatar"/>
            <div className="feed_input">
                <CreateIcon />
                <form>
                    <input type="text" placeholder="Start a post" />
                    <button type="submit">Send</button>
                </form>
            </div>
            </div>
        <div className="feed_inputOptions">
            <InputOption title="Photo" Icon={PanoramaIcon} color="#70B5F9"/>
        </div>
        </div>
    </div>
  )
}

export default Feed;