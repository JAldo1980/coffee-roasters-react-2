import React from "react";
import Collection from "../components/Collection";
import collectionData from "../components/CollectionData";
import HomeHeader from "../components/home-components/HomeHeader";
import WhyUs from "../components/home-components/WhyUs";
import HowWorks from "../components/home-components/HowWorks";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <HomeHeader />
      <h2 className="root-headers">our collection</h2>
      <div className="collection-box-el">
        <div className="collection-el">
          {collectionData.map((item, index) => (
            <Collection key={index} {...item} />
          ))}
        </div>
        <WhyUs />
        <HowWorks />
        <Footer />
      </div>
    </>
  );
}

export default Home;
