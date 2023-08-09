/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../Styles/star-block.css";

import { keys } from "../Utils/requests";

function RandomPs() {
  let navigate = useNavigate();

  const [stars, setStars] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let page = toString(Math.floor(Math.random() * 3) + 1);
    const options = {
      method: "GET",
      url: "https://papi-pornstarsapi.p.rapidapi.com/pornstars/",
      paramas: { page: page },
      headers: {
        "X-RapidAPI-Key": keys.RAPID_API_KEY,
        "X-RapidAPI-Host": keys.RAPID_API_HOST,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        let allStars = response.data.results;
        let idexs = [];
        let selectedStars = [];
        for (let i = 0; i < 20; i++) {
          let randomStar = Math.floor(Math.random() * 20);
          if (idexs.includes(randomStar)) {
          } else {
            if (allStars[randomStar].images.length !== 0) {
              idexs.push(randomStar);
              selectedStars.push(allStars[randomStar]);
            }
          }
        }
        setStars(selectedStars);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (stars.length !== 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [stars]);

  function handleBlockClick(starDetails) {
    navigate(`/pornstars/${starDetails.name}/${starDetails.age}`);
  }

  return (
    <div>
      {loaded ? (
        <div className="loaded-random">
          {stars.map((star) => {
            return (
              <div className="star-block">
                {/* <img src={`${star.images[0].image}`} alt="" /> */}
                <div
                  className="star-block-wrap"
                  onClick={() => {
                    handleBlockClick(star);
                  }}
                >
                  <img
                    src={`${star.images[0].image}`}
                    alt=""
                    className="star-block-img"
                  />
                  <p className="star-block-name">{star.name}</p>
                </div>
              </div>
            );
          })}
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

export default RandomPs;
