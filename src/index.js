import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Register from "./pages/RegisterLogin/Register.jsx";
import Login from "./pages/RegisterLogin/Login.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import CreateCourse from "./pages/CreatCourse/CreateCourse.jsx";
import AttendeesCourses from "./pages/AttendeesCourses.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import EditCourse from "./pages/Dashboard/Dashboard.jsx";
import DeleteCourse from "./pages/DeleteCourse.jsx";
import Logout from "./pages/Logout.jsx";
import CourseContent from "./pages/CourseContent/CourseContent.jsx";
import InstructorUser from "./pages/InstructorUser/InstructorUser.jsx";
import UserMessage from "./pages/InstructorUser/UserMessage.jsx";
import InviteUser from "./pages/InviteUser/InviteUser.jsx";
import CreatSession from "./pages/CreatSession/CreatSession.jsx";
import MediaLibrary from "./pages/MediaLibrary/MediaLibrary.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AttendeesCourses /> },

      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "create", element: <CreateCourse /> },
      { path: "courses/users/:id", element: <AttendeesCourses /> },
      { path: "mycourses/:id", element: <Dashboard /> },
      { path: "courses/:id/edit", element: <EditCourse /> },
      { path: "courses/:id/delete", element: <DeleteCourse /> },
      { path: "logout", element: <Logout /> },
      { path: "Instructor_User", element: <InstructorUser /> },
      { path: "UserMessage", element: <UserMessage /> },
      { path: "courses/:id/coursecontent", element: <CourseContent /> },
      { path: "InviteUser", element: <InviteUser /> },
      { path: "CreatSession", element: <CreatSession /> },
      { path: "MediaLibrary", element: <MediaLibrary /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
