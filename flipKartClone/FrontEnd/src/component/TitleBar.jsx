import "./titleBar.css";

function TitleBar() {
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
        <div className="barItem login">login</div>
        <span className="barItem">become seller</span>
        <span className="barItem">kart</span>
      </div>
    </div>
  );
}
export default TitleBar;
