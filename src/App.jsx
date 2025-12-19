import { Routes, Route, useLocation } from "react-router-dom";
import PlayWithPartner from './pages/PlayWithPartner';
import Generate1 from "./pages/Generate1";
import Generate2 from "./pages/Generate2";
import Scan1 from "./pages/Scan1";
import Scan2 from "./pages/Scan2";
import Scan3 from "./pages/Scan3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PlayWithPartner />} />
      <Route path="/generate1" element={<Generate1 />} />
      <Route path="/generate2" element={<Generate2 />} />
      <Route path="/scan1" element={<Scan1 />} />
      <Route path="/scan2" element={<Scan2 />} />
      <Route path="/scan3" element={<Scan3 />} />
    </Routes>
  )
}

export default App;