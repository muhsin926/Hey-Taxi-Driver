import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { setUserId } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const decoded = jwt_decode(token);
      dispatch(setUserId(decoded.userId));
      setAuthenticated(true);
    }
  }, [authenticated, dispatch]);

  return authenticated;
};

export default useAuth;