import React, { useState } from "react";
import VideoImg from "../../images/background-2.jpg";
import { DUMMY_COURSES_VIDEOS } from "../../data";
import "./CourseContent.css";
const CourseContent = () => {
  const [mainVideo, setMainVideo] = useState(DUMMY_COURSES_VIDEOS[0]);

  const handleVideoClick = (video) => {
    setMainVideo(video);
  };

  return (
    <div className="course-content">
      <section className="main-video">
        <video controls autoPlay muted>
          <source src={`../videos/${mainVideo.name}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className="main-video-title">{mainVideo.title}</h3>
      </section>
      <section className="video-playlist">
        <h3 className="playlist-title">Video Playlist</h3>
        <ul className="playlist">
          {DUMMY_COURSES_VIDEOS.map((video, index) => (
            <li
              key={video.id}
              className={video.id === mainVideo.id ? "active" : ""}
              onClick={() => handleVideoClick(video)}
            >
              <img src={VideoImg} alt="" className="video-thumbnail" />
              <div className="video-info">
                <h4 className="video-title">{video.title}</h4>
                <p className="video-duration">{video.duration}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CourseContent;
