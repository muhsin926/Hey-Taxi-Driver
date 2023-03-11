import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../customHooks/useAuth";
import useVerify from "../customHooks/useVerify";

const ProtectedRoute = ({ children }) => {
  const authenticated = useAuth();
  const isVerified = useVerify(); 
  const navigate = useNavigate();

  if (!authenticated && authenticated != undefined) {
    navigate("/login");
    return null;
  }

  if (!isVerified && isVerified != undefined) {
    navigate('/not_verified');
    return null;
  }

  return children;
};

export default ProtectedRoute;
