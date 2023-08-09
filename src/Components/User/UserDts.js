/** @format */

import React, { useEffect } from "react";

import "../../Styles/user-details.css";
import "../../Styles/image-caro.css";

import LArrow from "../../Static/LArrow.png";
import RArrow from "../../Static/RArrow.png";
import noImg from "../../Static/no-img.png";

function UserDts({
  name,
  age,
  dateOfBirth,
  ethnicity,
  nationality,
  raw_measurement,
  eyes,
  hair,
  height,
  weight,
  hip,
  images,
}) {
  //Image Hover Change
  let thumbnails = document.getElementsByClassName("thumbnail");
  let activeImages = document.getElementsByClassName("active");

  // useEffect(() => {
  if (images.length < 5) {
    for (let i = 0; i < 5 - images.length; i++) {
      images.push(noImg);
    }
  }
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
      if (activeImages.length !== 0) {
        activeImages[0].classList.remove("active");
      }
      thumbnails[i].classList.add("active");
      document.getElementById("feature").src = thumbnails[i].src;
    });
  }
  // }, []);

  function setActiveimage(e) {
    console.log(e);
  }
  console.log(images);
  //SLIDER
  let slide = document.getElementsByClassName("slider")[0];

  // leftArrow.addEventListener("click", () => {
  //   slide.scrollLeft -= 180;
  // });

  // rightArrow.addEventListener("click", () => {
  //   slide.scrollLeft += 180;
  // });

  function slideScrollLeft() {
    slide.scrollLeft -= 180;
  }
  function slideScrollRight() {
    slide.scrollLeft += 180;
  }

  return (
    <div className="star-details-record">
      <div className="star-picture-carou">
        <div className="wrap-feat">
          <img src={images[0].image_link} alt="" id="feature" />
        </div>
        <div className="slider-wrapper">
          <img
            src={LArrow}
            alt=""
            className="slider-arrow"
            id="left-arrow"
            onClick={slideScrollLeft}
          />
          <div className="slider">
            <img
              src={images[0].image_link}
              alt=""
              className="thumbnail active"
            />

            <img
              src={images[4].image_link}
              alt=""
              className="thumbnail"
              onClick={(e) => {
                setActiveimage(e);
              }}
            />

            <img src={images[1].image_link} alt="" className="thumbnail" />

            <img src={images[2].image_link} alt="" className="thumbnail" />

            <img src={images[3].image_link} alt="" className="thumbnail" />
          </div>
          <img
            src={RArrow}
            alt=""
            className="slider-arrow"
            id="right-arrow"
            onClick={slideScrollRight}
          />
        </div>
      </div>
      <div className="star-details-text">
        <h1 className="star-name">{name}</h1>
        <div className="star-details-text-container">
          <div className="star-details-text-container-left">
            <p className="star-detail-text-content">
              <p className="q">Age: </p>
              <p className="f">{age}</p>
            </p>
            <p className="star-detail-text-content">
              <p className="q">Date Of Birth: </p>
              <p className="f">{dateOfBirth}</p>
            </p>
            <p className="star-detail-text-content">
              <p className="q">Ethnicity: </p>
              <p className="f">{ethnicity}</p>
            </p>
            <p className="star-detail-text-content">
              <p className="q">Nationality: </p>
              <p className="f">{nationality}</p>
            </p>
            <p className="star-detail-text-content">
              <p className="q">Raw Measurement: </p>
              <p className="f">{raw_measurement}</p>
            </p>
          </div>
          <div className="star-details-text-container-right">
            <p className="star-detail-text-content">
              <p className="q">Eyes: </p>
              <p className="f">{eyes}</p>
            </p>
            <p className="star-detail-text-content">
              <p className="q">Hair: </p>
              <p className="f">{hair}</p>
            </p>
            <p className="star-detail-text-content">
              <p className="q">Height: </p>
              <p className="f">{height}</p>
            </p>
            <p className="star-detail-text-content">
              <p className="q">Weight: </p>
              <p className="f">{weight}</p>
            </p>
            <p className="star-detail-text-content">
              <p className="q">Hip: </p>
              <p className="f">{hip}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDts;
