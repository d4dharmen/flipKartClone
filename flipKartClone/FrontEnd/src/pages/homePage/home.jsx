import "./home.css";

// imported components
import { Card } from "../../component/cards/ItemCard";
import { Footer } from "../../component/footer/footer";
import { ItemBanner } from "../../component/itemBanner/ItemBanner";
import { Menu } from "../../component/itemMenu/menu";
import TitleBar from "../../component/TitleBar";

 function HomePage() {
  return (
    <div>
      <TitleBar />
      <div className="menus">
        <Menu />
      </div>
      <div className="banner">
      <ItemBanner />
      </div>
      

      <div className="productHeadingDiv">
        <h1>Loot lo offer till sep 2023</h1>
      </div>
      <div className="cards banner">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
