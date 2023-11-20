import React from "react";
import Collection from "../components/Collection";
import collectionData from "../components/CollectionData";
import HomeHeader from "../components/home-components/HomeHeader";

function Home() {
  return (
    <>
      <HomeHeader />
      <div className="collection-box-el">
        <h2>our collection</h2>
        <div className="collection-el">
          {collectionData.map((item, index) => (
            <Collection key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
