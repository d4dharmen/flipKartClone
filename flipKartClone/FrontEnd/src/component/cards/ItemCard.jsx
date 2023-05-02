import "./ItemCard.css";

export function Card() {
  return (
    <div className="card">
      <img src="./src/assets/img/photo.jpg" alt="img" />
      <div className="details">
        <p>price $ 30</p>
        <p>color: blue</p>
        <div className="aboutProduct"></div>
      </div>

      <button className="add2cart">Add to cart</button>
    </div>
  );
}
