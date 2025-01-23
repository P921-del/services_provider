import React from "react";
import MainHeaderForEachComponent, {
  ImainRestaurantHeader,
} from "../mainHeaderForEachComponent.tsx";
import FeaturedRestaurantsPartners from "./FeaturedRestaurants.tsx";
function Restaurants() {
  const mainHeaderForRestaurantComponent: ImainRestaurantHeader = {
    image: "HeaderRestaurantComponentBackgroundImage",
    text: "Restaurant Partners",
  };
  return (
    <div>
      <MainHeaderForEachComponent
        mainHeader={mainHeaderForRestaurantComponent}
      />
      <FeaturedRestaurantsPartners />
    </div>
  );
}

export default Restaurants;
