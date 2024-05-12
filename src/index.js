import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Register from "./pages/RegisterLogin/Register.jsx";
import Login from "./pages/RegisterLogin/Login.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import CreateCourse from "./pages/Course/CreateCourse.jsx";
import AttendeesCourses from "./pages/AttendeesCourses.jsx";
import EditCourse from "./pages/Course/EditCourse.jsx";
import DeleteCourse from "./pages/Course/DeleteCourse.jsx";
import Home from "./pages/Home.jsx";
import CourseContent from "./pages/CourseContent/CourseContent.jsx";
import InstructorUser from "./pages/InstructorUser/InstructorUser.jsx";
import UserMessage from "./pages/InstructorUser/UserMessage.jsx";
import InviteUser from "./pages/InviteUser/InviteUser.jsx";
import CreatSession from "./pages/Session/CreatSession.jsx";
import EditSession from "./pages/Session/EditSession.jsx";
import DeleteSession from "./pages/Session/DeleteSession.jsx";
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
      { index: true, element: <Home /> },

      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "create", element: <CreateCourse /> },
      { path: "courses/users/:id", element: <AttendeesCourses /> },
      { path: "courses/:id/edit", element: <EditCourse /> },
      { path: "courses/:id/delete", element: <DeleteCourse /> },
      { path: "Instructor_User", element: <InstructorUser /> },
      { path: "UserMessage", element: <UserMessage /> },
      { path: "courses/:id/coursecontent", element: <CourseContent /> },
      { path: "InviteUser", element: <InviteUser /> },
      {
        path: "courses/:id/coursecontent/CreatSession",
        element: <CreatSession />,
      },
      {
        path: "courses/:id/coursecontent/DeleteSession",
        element: <DeleteSession />,
      },
      {
        path: "courses/:id/coursecontent/editsession",
        element: <EditSession />,
      },
      { path: "Home", element: <Home /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
