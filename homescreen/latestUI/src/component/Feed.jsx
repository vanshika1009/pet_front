import React from "react";
import { Link } from "react-router-dom";

function Feed({ feedImage }) {
  return (
    <div className="feed-item border-bottom">
      <div className="feed-header border-bottom">
        <div className="profile-section">
          <img
            src="images/profile-image.jpg"
            className="profile-image"
            alt=""
          />
        </div>

        <div className="username">
          <Link to="/profile">user_name</Link>
        </div>
      </div>

      <div className="feed-image">
        <img src={`images/${feedImage}`} alt="Feeds" />
      </div>

      <div className="caption">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
          veritatis tenetur qui ipsum ex, explicabo quasi aperiam laudantium
          nisi corrupti.
        </p>
      </div>
    </div>
  );
}

export default Feed;
