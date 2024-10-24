import Dashboard from "./scenes/dashboard";
import Topbar from "./scenes/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";

function App() {
  return (
    <div className="app" style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <main className="content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          {/* Uncomment these routes when you have them ready */}
          {/* 
          <Route path="/form" element={<Form />} />
          <Route path="/calendar" element={<Calendar />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;


