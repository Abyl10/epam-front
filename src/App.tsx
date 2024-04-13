import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/root-layout";
import Home from "./pages/home";
import Reading from "./pages/reading";
import Voice from "./pages/voice";
import Profile from "./pages/profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
