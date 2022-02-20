// import logo from './logo.svg';
// import './App.css';
import Grader from './Grader';
// import Dashboard from "./Dashboard";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import UserProvider from "./UserProvider";

// made by Tevin Wang, Ryane Li, Charlie Duong, Justin Ji

function App() {
  // <UserProvider>
  return (
  <div className="App">
    <Grader/>
  {/* <Router>
        <Routes>
          <Route exact path="/" element={<Grader/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
  </Router> */}
    </div>
  // </UserProvider>
  );
}

export default App;
