import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DocUploaderPage from "./pages/DocUploaderPage";
import Loginpage from "./pages/Loginpage";
import RequirementPage from "./pages/RequirementPage";
import SignupPage from "./pages/SignupPage";
import VehiclesPage from "./pages/VehiclesPage";
import { io } from "socket.io-client";
import jwt_decode from "jwt-decode";
import { setUserId } from "./redux/slices/AuthSlice";
import DrivingPage from "./pages/DrivingPage";
import EarnigsPage from "./pages/EarnigsPage";
import TripManagePage from "./pages/TripManagePage";
import ProfilePage from "./pages/ProfilePage";
import InboxPage from "./pages/InboxPage";
import NotVerifiedPage from "./pages/NotVerifiedPage";
import { SocketContext } from "./context/SocketContext";

const App = () => {
  const { userId } = useSelector((state) => state.auth)
  const { socket, setSocket } = useContext(SocketContext);
  const dispatch = useDispatch()
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const decoded = jwt_decode(token);
      dispatch(setUserId(decoded.userId))
    }
    const data = io(import.meta.env.VITE_SERVER_DOMAIN)
    setSocket(data)
   socket && socket.emit("addDriver", userId);

  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/requirements" element={<RequirementPage />} />
          <Route path="/requirements/docUpload" element={<DocUploaderPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/driving" element={<DrivingPage />} />
          <Route path="/earnings" element={<EarnigsPage />} />
          <Route path="/trip_manage" element={<TripManagePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat" element={<InboxPage />} />
          <Route path="/not_verified" element={<NotVerifiedPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
