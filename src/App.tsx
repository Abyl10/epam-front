import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/root-layout";
import Home from "./components/pages/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
