/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../Styles/videoo.css";

import testimg3 from "../../Static/testimg3.png";

function UserVids({ query }) {
  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://www.eporner.com/api/v2/video/search/?query=${query}&per_page=10&format=json`,
    };
    axios.request(options).then((response) => {
      // console.log(response.data.videos);
      setVideos(response.data.videos);
    });
  }, [query]);

  useEffect(() => {
    if (videos.length !== 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [videos || query]);

  return (
    <div className="video-componenet">
      {loaded ? (
        <div className="loaded-videos">
          {videos.length === 0 ? (
            <div className="no-vids">No Videos Of This Porn Star</div>
          ) : (
            <div className="videos-found">
              {videos.map((video) => {
                //thumb should be there
                // console.log(video.default_thumb.src);
                return (
                  <div className="video-thumb-wrap">
                    <a href={video.url} target="_blank" rel="noreferrer">
                      <img
                        src={video.default_thumb.src}
                        alt={video.url}
                        id={video.title}
                        className="video-thumb"
                      />
                      <h4 className="video-title">{video.title}</h4>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="loading-videos">
          <div className="ring">
            Loading
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserVids;
