import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import RootLayout from "./components/layout/root-layout";
import Home from "./pages/home";
import Reading from "./pages/reading";
import Voice from "./pages/voice";
import Profile from "./pages/profile";
import AuthLayout from "./components/layout/auth-layout";
import Login from "./pages/auth/login";
import { getToken } from "./utils/token";
import VoiceStart from "./pages/voice-start";
import BookDetail from "./pages/book";

function App() {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token]);

  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<div>Signup</div>} /> // Removed the
          leading slash
        </Route>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="reading" element={<Reading />} />
          <Route path="voice" element={<Voice />} />
          <Route path="profile" element={<Profile />} />
          <Route path="voice-start/:id" element={<VoiceStart />} />
          <Route path="/book/:id" element={<BookDetail />} /> {/* Assuming `BookDetail` is a component for showing book details */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
