import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditCourse = () => {
  const [title, setTitle] = useState("");
  const [descreption, setDescreption] = useState("Uncategorized");
  const [courseDuration, setCourseDuration] = useState(0);
  const [startingDate, setStartingDate] = useState("");

  const [selectedLabel, setSelectedLabel] = useState("Label1");
  const [photo, setPhoto] = useState(null);
  const courseLabels = ["Label1", "Label2", "Label3"];

  const handleLabelChange = (event) => {
    setSelectedLabel(event.target.value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const getLabelColor = (label) => {
    switch (label) {
      case "Label1":
        return "red";
      case "Label2":
        return "blue";
      case "Label3":
        return "green";
      default:
        return "black";
    }
  };

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
    <div className="create-course">
      <h2>Edit Course</h2>
      <form className="form create-course__form">
        <label>course Name:</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <label>Course Descrption:</label>
        <ReactQuill
          modules={modules}
          formats={formats}
          value={descreption}
          onChange={setDescreption}
        />

        <div className="inline-label">
          <label>
            Course Duration (In Days):
            <input
              type="number"
              value={courseDuration}
              onChange={(event) => setCourseDuration(event.target.value)}
            />
          </label>

          <label>
            Starting Date:
            <input
              type="date"
              value={startingDate}
              onChange={(event) => setStartingDate(event.target.value)}
            />
          </label>
        </div>
        <br />
        <div className="form-group">
          <label>Select Course Label:</label>
          <select
            className="end-page"
            value={selectedLabel}
            onChange={handleLabelChange}
            style={{ color: getLabelColor(selectedLabel) }}
          >
            {courseLabels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="upload-photo">
          <label>Upload Photo:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <br />
        <button type="submit" className="btn-submite">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
