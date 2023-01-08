import React from "react";
import cover from "../assets/cover.jpg";

function Cover() {
  return (
    <div className="cover">
      <img src={cover} alt="" />
      <div className="cover-text">
        <h1> This is a Store</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa
          laudantium dolores necessitatibus quod repellendus excepturi voluptate
          ipsam dicta, illo ratione, ex odio ad soluta voluptatem! Qui ad quas
          esse.
        </p>
      </div>
    </div>
  );
}

export default Cover;
