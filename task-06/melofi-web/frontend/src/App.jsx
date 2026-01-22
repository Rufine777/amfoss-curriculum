import React, { useRef, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signUp/signUp.jsx";
import ForgotPassword from "./pages/forgot_password/forgot_password.jsx";
import Profile from "./pages/profile/profile.jsx";
import Playlist from "./pages/playlist/playlist.jsx";
import Settings from "./pages/settings/settings.jsx";
import Searching from "./pages/searching/searching.jsx";
import Playing from "./pages/nowplaying/playing.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";

function App() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playlist, setPlaylist] = useState([]); // Store all songs
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update time and duration
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => playNext();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const playSong = (song, songList = []) => {
    if (!audioRef.current) return;
    
    // Update playlist if provided
    if (songList.length > 0) {
      setPlaylist(songList);
      const index = songList.findIndex(s => s.trackId === song.trackId);
      setCurrentIndex(index !== -1 ? index : 0);
    }

    if (currentSong?.trackId !== song.trackId) {
      audioRef.current.src = song.previewUrl;
      audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);
    } else {
      togglePlay();
    }
  };

  const playNext = () => {
    if (playlist.length === 0) return;
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    playSong(playlist[nextIndex], playlist);
  };

  const playPrevious = () => {
    if (playlist.length === 0) return;
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    playSong(playlist[prevIndex], playlist);
  };

  const seekTo = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/forgotPassword", element: <ForgotPassword /> },
    { path: "/Profile", element: <Profile /> },
    { path: "/Playlist", element: <Playlist /> },
    {
      path: "/dashboard",
      element: (
        <Dashboard
          audioRef={audioRef}
          currentSong={currentSong}
          isPlaying={isPlaying}
          playSong={playSong}
        />
      ),
    },
    {
      path: "/Playing",
      element: (
        <Playing
          audioRef={audioRef}
          currentSong={currentSong}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          currentTime={currentTime}
          duration={duration}
          seekTo={seekTo}
          playNext={playNext}
          playPrevious={playPrevious}
        />
      ),
    },
    {
      path: "/Searching",
      element: <Searching playSong={playSong} />,
    },
    { path: "/Settings", element: <Settings /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <audio ref={audioRef} />
    </>
  );
}

export default App;