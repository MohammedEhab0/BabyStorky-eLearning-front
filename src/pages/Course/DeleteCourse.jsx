import React, { useState } from "react";
import Photo from "../../images/Thinking-PNG.png";
import "./DeleteCourse.css";

const DeleteCourse = () => {
  const [deletePopup, setDeletePopup] = useState(false);

  const handleDelete = () => {
    setDeletePopup(false);
  };

  const handleCancel = () => {
    setDeletePopup(false);
  };

  const handleConfirmation = () => {
    setDeletePopup(true);
  };

  return (
    <div className="delete-course-dialog">
      <header className="logo-u">
        <img src={Photo} alt="Logo" />
      </header>
      {deletePopup && (
        <div className="confirmation-popup">
          <h2>Are you sure you want to delete the course "For Try Course"?</h2>
          <p>This step can't be reversed.</p>
          <div className="btn-list">
            <button className="btn-submite" onClick={handleDelete}>
              Yes
            </button>
            <button className="btn-submite" onClick={handleCancel}>
              No
            </button>
          </div>
        </div>
      )}
      <button className="btn-submite" onClick={handleConfirmation}>
        Delete Course
      </button>
    </div>
  );
};

export default DeleteCourse;
