import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/root-layout";
import Home from "./pages/home";
import Reading from "./pages/reading";
import Voice from "./pages/voice";
import Profile from "./pages/profile";
import AuthLayout from "./components/layout/auth-layout";
import Login from "./pages/auth/login";

function App() {
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
