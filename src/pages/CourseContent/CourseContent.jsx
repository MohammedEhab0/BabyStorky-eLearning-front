import React, { useState } from "react";
import VideoImg from "../../images/background-2.jpg";
import { DUMMY_COURSES_VIDEOS } from "../../data";
import "./CourseContent.css";
import ReactPlayer from "react-player";
import InviteLogo from "../../images/add-user.png";
import SessionLogo from "../../images/webinars.png";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
const CourseContent = () => {
  const [mainVideo, setMainVideo] = useState(DUMMY_COURSES_VIDEOS[7]);

  const handleVideoClick = (video) => {
    setMainVideo(video);
  };

  return (
    <>
      <div className="course-content">
        <section className="main-video">
          <ReactPlayer
            controls={true}
            url={`${mainVideo.video}`}
            className="main-video video"
            muted={false}
            width="700px"
            height="500px"
          />
          <h3 className="main-video-title">{mainVideo.title}</h3>
        </section>

        <div className="big-container">
          <div className="icon-container">
            <button>
              <Link to={"/InviteUser"}>
                <img src={InviteLogo} />
              </Link>
            </button>
            <button>
              <Link to={"courses/:id/edit"}>
                <FaEdit className="edit" />
              </Link>
            </button>
            <button>
              <Link to={"/CreatSession"}>
                <img className="img-content" src={SessionLogo} />
              </Link>
            </button>
          </div>
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
      </div>
    </>
  );
};

export default CourseContent;
