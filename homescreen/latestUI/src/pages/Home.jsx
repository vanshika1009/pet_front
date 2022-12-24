import React from "react";
import axios from "axios";

import Feed from "../component/Feed";
import Header from "../component/Header";

function Home() {
   React.useEffect(() => {
    axios.get("https://95c7-2601-441-4200-d9a0-d4cb-4754-283e-c57f.ngrok.io")
       .then((data) => {
         console.log(data);
       });
   }, []);

  return (
    <div className="container">
      <div className="header border-bottom">
        <Header />
      </div>

      <div className="feeds"> 
      //
        <Feed feedImage="feed-1.jpeg" />
        <Feed feedImage="feed-2.jpg" />
        <Feed feedImage="feed-3.jpg" />
      </div>
    </div>
  );
}

export default Home;
