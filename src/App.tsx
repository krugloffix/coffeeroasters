import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/use-auth";
import { useAppSelector } from "./redux/store";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Subscription from "./pages/Subscription";
import User from "./pages/User";
import Checkout from "./pages/Checkout";

import "./sass/style.sass";
import "./sass/adaptive.sass";

function App() {
  type Props = {
    children: JSX.Element;
  };

  const isAuth = useAuth();
  const isPlan = useAppSelector((state) => state.plan.isPlan);

  const RequireAuth = ({ children }: Props) => {
    return isAuth.isAuth ? children : <Navigate to="/" />;
  };

  const RequirePlan = ({ children }: Props) => {
    return isPlan ? children : <Navigate to="/subscription" />;
  };
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <RequirePlan>
                <Checkout />
              </RequirePlan>
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
