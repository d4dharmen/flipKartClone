import { useState } from "react";
import "./titleBar.css";

//components
import MuiLogin from "./MuiLogin/MuiLogin";

function TitleBar() {
  const [open, setOpen] = useState(false);

  const openLogin = () => {
    setOpen(true);
  };
  return (
    <div className="barDiv">
      <div className="logoDiv">
        <h4 className="">FlipKart</h4>
        <p className="barSlogan">MartWithReliance</p>
      </div>
      <div className="itembox">
        <span className="searchBox">
          <input type="search" name="" placeholder="search your product here" />
        </span>
        <div className="barItem login" onClick={() => openLogin()}>
          login
        </div>
        <span className="barItem">become seller</span>
        <span className="barItem">kart</span>
      </div>
      <MuiLogin open={open} setOpen={setOpen} />
    </div>
  );
}
export default TitleBar;
