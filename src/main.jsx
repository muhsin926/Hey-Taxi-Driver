import React from "react";
import ReactDOM from "react-dom/client";
import store from './redux/Store';
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { SocketProvider } from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SocketProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SocketProvider>
  </React.StrictMode>
);
