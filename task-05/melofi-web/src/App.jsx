import Login from "./pages/login/login.jsx"
import SignUp from "./pages/signUp/signUp.jsx"
import ForgotPassword from "./pages/forgot_password/forgot_password.jsx"
import React from "react";
import Profile from "./pages/profile/profile.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Playlist from "./pages/playlist/playlist.jsx";
import Settings from "./pages/settings/settings.jsx";
import Searching from "./pages/searching/searching.jsx";
import Playing from "./pages/nowplaying/playing.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "/Playlist", 
      element: <Playlist playlistname= "PlaylistName" number={10} 
      sname1 ="song1" aname1 ="artist1"  duration1 ="3:42"
      sname2 ="song2" aname2 ="artist2"  duration2 ="4:12"
      sname3 ="song3" aname3 ="artist3"  duration3 ="2:58"
      sname4 ="song4" aname4 ="artist4"  duration4 ="5:01"
      sname5 ="song5" aname5 ="artist5"  duration5 ="3:33"
      />,
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
    },
    {
      path:"/Playing",
      element:<Playing/>,
    },
    {
     path: "/Settings",
     element:<Settings/>, 
    },
    {
      path: "/Searching",
      element: <Searching/>,
    },

  ]);

    return (
    // <>
      <RouterProvider router={router} />
    //   {/* <Settings /> */}
    // </>
      // <Searching />
      // <Playing />
      // <Dashboard/>
      // <Profile/>
      // <Playlist playlistname= "PlaylistName" number={10} 
      //     sname1 ="song1" aname1 ="artist1"  duration1 ="3:42"
      //     sname2 ="song2" aname2 ="artist2"  duration2 ="4:12"
      //     sname3 ="song3" aname3 ="artist3"  duration3 ="2:58"
      //     sname4 ="song4" aname4 ="artist4"  duration4 ="5:01"
      //     sname5 ="song5" aname5 ="artist5"  duration5 ="3:33"
      //     />
  
  );
}

export default App;
