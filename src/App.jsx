import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./authentication/Login";
import EmployeeTable from "./pages/EmployeeTable";
import EmployeeDetails from "./pages/EmployeeDetails";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<EmployeeTable />} />
              <Route path="/employee/:id" element={<EmployeeDetails />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
