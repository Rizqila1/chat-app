import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="app-main container-fluid mx-auto">
      <Outlet />
    </main>
  );
}

export default App;
