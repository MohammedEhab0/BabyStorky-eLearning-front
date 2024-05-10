import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { BsCloudUpload } from "react-icons/bs";
import "./CreatSession.css";
const CreatSession = () => {
  const [title, setTitle] = useState("");
  const [descreption, setDescreption] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "indent",
    "link",
    "image",
    "bullet",
  ];

  return (
    <form className="create-session">
      <div className="container-session">
        <h2>New Session</h2>
        <form className="form create-course__form">
          <input
            type="text"
            placeholder="Session Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className="session-name"
            required
          />
          <label>Session Type</label>
          <div className="Session-Type">
            <div className="chose">
              <label htmlFor="live_session">Live Session</label>
              <input type="radio" name="session_type" id="live_session" />
            </div>
            <div className="chose">
              <label htmlFor="recorded_session">Post | Recorded Session</label>
              <input type="radio" name="session_type" id="recorded_session" />
            </div>
          </div>

          <ReactQuill
            className="react-quill"
            modules={modules}
            formats={formats}
            value={descreption}
            onChange={setDescreption}
            placeholder="Session Descreption"
            required
          />
          <div className="time">
            <div>
              <label for="date">Date</label>
              <input type="date" id="date" required />
            </div>
            <div>
              <label for="time">Time</label>
              <input type="time" id="time" required />
            </div>
          </div>
          <div className="checkbox">
            <label>Expire Date</label>
            <input type="checkbox" />
          </div>
          <div className="time">
            <div>
              <label for="date">Expire Date</label>
              <input type="date" id="date" required />
            </div>

            <div>
              <label for="time">Expire Time</label>
              <input type="time" id="time" required />
            </div>
          </div>

          <button type="submit" className="btn primary">
            Create
          </button>
          <div className="upload-Media">
            <button className="btn-1">
              Upload Media <BsCloudUpload className="BsCloudUpload" />
            </button>
          </div>
        </form>
      </div>
    </form>
  );
};

export default CreatSession;
