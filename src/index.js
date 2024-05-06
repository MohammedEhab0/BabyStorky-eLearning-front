import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Register from "./pages/RegisterLogin/Register.jsx";
import Login from "./pages/RegisterLogin/Login.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import Attendees from "./pages/Author/Attendees.jsx";
import CreateCourse from "./pages/CreatCourse/CreateCourse.jsx";
import AttendeesCourses from "./pages/AttendeesCourses.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import EditCourse from "./pages/Dashboard/Dashboard.jsx";
import DeleteCourse from "./pages/DeleteCourse.jsx";
import Logout from "./pages/Logout.jsx";
import CourseContent from "./pages/CourseContent/CourseContent.jsx";
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
      { path: "courses/:id", element: <CourseDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "Attendees", element: <Attendees /> },
      { path: "create", element: <CreateCourse /> },
      { path: "courses/users/:id", element: <AttendeesCourses /> },
      { path: "mycourses/:id", element: <Dashboard /> },
      { path: "courses/:id/edit", element: <EditCourse /> },
      { path: "courses/:id/delete", element: <DeleteCourse /> },
      { path: "logout", element: <Logout /> },
      { path: "coursecontent", element: <CourseContent /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
