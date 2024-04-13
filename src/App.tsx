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
          <Route path="/" element={<Reading />} />
          <Route path="/" element={<Voice />} />
          <Route path="/" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
