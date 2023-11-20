import React from "react";

function HomeHeader({ handleMobileHeader }) {
  return (
    <>
      <div className="mobile-header-el">
        <div className="mobile-header-text">
          <h3>Great coffee made simple</h3>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="mobile-header-btn" onClick={handleMobileHeader}>
            Create your plan
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
