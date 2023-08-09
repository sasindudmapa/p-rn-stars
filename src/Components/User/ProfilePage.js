/** @format */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "../../Styles/star-details-container.css";

import { keys } from "../../Utils/requests";
import UserDts from "./UserDts";
import UserVids from "./UserVids";

function ProfilePage() {
  let { starID, starRank } = useParams();
  let navigate = useNavigate();
  console.log(typeof starID, ",", starRank);

  const [starDetails, setStarDetails] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://papi-pornstarsapi.p.rapidapi.com/pornstars/",
      params: { name: starID },
      headers: {
        "X-RapidAPI-Key": keys.RAPID_API_KEY,
        "X-RapidAPI-Host": keys.RAPID_API_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setStarDetails(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [starID]);

  useEffect(() => {
    if (starDetails.length !== 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [starDetails]);

  // console.log("star id is ", starID);
  // console.log("star age is ", starRank);

  function handleHomeNavigate() {
    navigate("/");
  }

  return (
    <div className="profile-page">
      <div className="main-title" onClick={handleHomeNavigate}>
        <div>Land of Porn</div>
      </div>
      {loaded ? (
        <div>
          <div className="star-details-container">
            <UserDts
              name={starDetails[0].name}
              age={starDetails[0].age}
              dateOfBirth={starDetails[0].date_of_birth}
              ethnicity={starDetails[0].ethnicity}
              nationality={starDetails[0].nationality}
              raw_measurement={starDetails[0].raw_measurement}
              eyes={starDetails[0].eyes}
              hair={starDetails[0].hair}
              height={starDetails[0].height}
              weight={starDetails[0].weight}
              hip={starDetails[0].hip}
              images={starDetails[0].images}
            />
          </div>
          <div className="star-video-container">
            {/* These are the videos */}
            <UserVids query={starDetails[0].name} />
          </div>
        </div>
      ) : (
        <div>
          <div className="ring">
            Loading
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
