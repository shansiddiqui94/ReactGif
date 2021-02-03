import React, { useState, useEffect } from "react";
import axios from "axios"; //this is the package manager

function Fetchgif() {
  // Now you set your STATE which include your current, your function that will update the current (aka setGif) and the = useState(the starting point)
  const [gif, setGif] = useState("One Moment");

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_KEY}`
    ); // In this line we are grabbing the data via the get function using our Base_url and Api key
    // process.env and then the baseurl/Apikey: Here we are telling react go into the .env file and pull the baseurl and he api key that we want to reference.

    setGif(response.data.data.image_original_url);
  };
  console.log(gif);

  useEffect(() => {
    fetchData();
  }, []); // the empty array is here to hold the data, otherwise it would keep loading

  return (
    <div>
      <img src={gif} alt="giphy" />
      <br />
      <button onClick={fetchData}>CLICK ME</button>
    </div>
  );
}

export default Fetchgif;
