import Dashboard  from "./scenes/dashboard";
import Topbar from "./scenes/global/Topbar";
import {Routes,Route} from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
//import Team from "./scenes/team";
//import Bar from "./scenes/bar";

//import Form from "./scenes/form";
//import Faq from "./scenes/faq";
//import  Calendar  from "./scenes/calendar";



function App() {
  return (
    

    <div className="app">
      <Sidebar/>
      <main className="content">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          {/*<Route path="/team" element={<Team/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/calendar" element={<Calendar/>}/>*/}
        </Routes>
      </main>
    </div>
    
  );
}

export default App;
