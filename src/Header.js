import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HeaderOptions from "./HeaderOptions";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import { logout } from './features/userSlice'


const Header = () => {
  const dispatch = useDispatch()


  const logoutOfApp = () => {
    dispatch(logout())
    signOut(auth)
  }
  
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="LinkedIn icon"
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions title="Home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOptions title="Messaging" Icon={MessageIcon} />
        <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
        <HeaderOptions
          title="Me"
          avatar={true}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
