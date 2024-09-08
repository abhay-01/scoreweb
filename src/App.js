import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import ConnectAccounts from "./screens/ConnectAccounts";
import ViewMetrics from "./screens/ViewMetrics";

const App = () => {
  // Using useNavigate inside the App component is not necessary in this context.
  // You can handle redirection logic differently if needed.

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path ="/connect-accounts" element={<ConnectAccounts/>}/>
      <Route path = "metrics-display" element={<ViewMetrics/>}/>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

const RootApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default RootApp;
