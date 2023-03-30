import "./HeaderOptions.css";

const HeaderOptions = ({ title, Icon }) => {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      <h3 className="headerOptionTitle">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
