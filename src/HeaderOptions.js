import "./HeaderOptions.css";
import { Avatar } from "@mui/material";


const HeaderOptions = ({ title, Icon, avatar }) => {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && (
        <Avatar className="headerOptions_icon" src={avatar} />
      )}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
