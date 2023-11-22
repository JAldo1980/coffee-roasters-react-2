import React from "react";

function Collection({ image, headline, description }) {
  return (
    <>
      <div className="collection-box-el">
        <div className="collection-el">
          <div className="collection-card">
            <img src={image} alt={headline} />
            <h3>{headline}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
