import "./Menu.css";
import { menuItem } from "../../constants/data";


export function Menu() {
  return (
    <div className="menuDiv">
      {menuItem.map((item) => (
        <div>
          <img src={item.icon} alt="img" />
          <h5> {item.tag}</h5>
        </div>
      ))}
    </div>
  );
}
