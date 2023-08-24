import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Flights from "./pages/Flights";
import Trains from "./pages/Trains";
import Hotels from "./pages/Hotels";
import Buses from "./pages/Buses";
import Topbar from "./components/Topbar";
import LeftSidebar from "./components/LeftSidebar";
import Bottombar from "./components/Bottambar";
import { ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./components/SignIn";
import SignUpPage from "./components/SignUp";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route path="/flights" exact element={<Flights />} />
                <Route path="/trains" exact element={<Trains />} />
                <Route path="/hotels" exact element={<Hotels />} />
                <Route path="/buses" exact element={<Buses />} />
                <Route path="/sign-up" exact element={<SignUpPage />} />
                <Route path="/sign-in" exact element={<SignInPage />} />
                <Route path="/" exact element={<Home />} />
              </Routes>
            </section>
          </main>
          <Bottombar />
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
