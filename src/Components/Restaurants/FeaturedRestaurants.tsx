import React from "react";
import { useState, useEffect } from "react";
import Restaurant from "./Restaurant.tsx";
function FeaturedRestaurantsPartners() {
  interface Restaurant {
    id: number;
    name: string;
    description: string;
  }
  const users: Restaurant[] = [];
  const initialState = {
    loading: false,
    users,
  };
  const [AllRestaurants, setAllRestaurants] = useState(initialState);
  useEffect(() => {
    setAllRestaurants({ ...AllRestaurants, loading: true });

    const timeout = setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/Data/AllRestaurants-data.json");
          const data = await response.json();
          //first convert the json object to string json object and then convert to javascript object
          const results = JSON.parse(JSON.stringify(data));
          //only put the results in the state (the actual users array)
          setAllRestaurants({ users: results, loading: false });
        } catch (error) {
          console.log("error: ", error);
        }
      };
      fetchData();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="mt-32">
      <h1 className="text-black text-4xl font-serif font-bold mb-4 text-center">
        Featured Restaurant Partners
      </h1>
      {AllRestaurants.loading ? (
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center space-x-2"
        >
          <svg
            className="h-20 w-20 animate-spin stroke-blue-600"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
          <span className="text-4xl font-medium text-blue-600">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-2 grid-rows-3 w-full gap-8 h-[900px]">
          {AllRestaurants.users?.map((restaurant) => (
            <Restaurant key={restaurant.id} {...restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedRestaurantsPartners;
