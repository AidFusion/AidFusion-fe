import React from 'react';

const FeaturedRestaurants = ({ restaurants }) => {
  return (
    <div className="featured-restaurants">
      <h2>Featured Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <button>View Menu</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
