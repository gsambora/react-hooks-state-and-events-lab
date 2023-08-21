import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, changeClass] = useState(false);

  function handleClick(){
    changeClass((inCart) => !inCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
