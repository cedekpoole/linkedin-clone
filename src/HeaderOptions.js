import "./HeaderOptions.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


const HeaderOptions = ({ title, Icon, avatar, onClick }) => {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && (
        <Avatar className="headerOptions_icon" src={user?.photoURL}>{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
