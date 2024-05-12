import React, { useState } from "react";
import VideoImg from "../../images/background-2.jpg";
import { DUMMY_COURSES_VIDEOS } from "../../data";
import "./CourseContent.css";
import ReactPlayer from "react-player";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiFileAddLine } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";

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
            className="video"
            muted={false}
            width="700px"
            height="500px"
          />
          <h3 className="main-video-title">{mainVideo.title}</h3>
        </section>

        <div className="big-container">
          <div className="icon-container">
            <Link to={"DeleteSession"} className="btn sm primary">
              <RiDeleteBin6Fill />
            </Link>
            <Link to={"editsession"} className="btn sm primary">
              <FaEdit />
            </Link>
            <Link to={"CreatSession"} className="btn sm primary">
              <RiFileAddLine />
            </Link>
            <Link to={"/InviteUser"} className="btn sm primary">
              <IoPersonAdd />
            </Link>
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
